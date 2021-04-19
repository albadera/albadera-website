"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerModule = void 0;
const collections_conse_1 = require("../consts/collections.conse");
const response_service_1 = require("../services/response.service");
const mongo_db_service_1 = require("../services/mongo.db.service");
const basic_module_1 = require("./basic.module");
const freight_cases_const_1 = require("../consts/freight.cases.const");
class ContainerModule extends basic_module_1.BasicModule {
    /*** Get Containers*/
    getContainers(loggedUser, skip, take, filterOptions) {
        let filter1 = {
            $match: {
                freightCaseId: {
                    $in: freight_cases_const_1.freightCasesContainerArrayIds
                }
            }
        };
        if (filterOptions.containerNumber)
            filter1.$match.containerNumber = { "$regex": filterOptions.containerNumber, "$options": "igm" };
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            filter1,
            { $sort: { _id: -1 } },
            { $skip: skip },
            { $limit: take },
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $lookup: { from: collections_conse_1.cols.navigationalWayes, localField: "navigationalWayeId", foreignField: "_id", as: "navigationalWaye" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "freightPortId", foreignField: "_id", as: "freightPort" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "arrivalPortId", foreignField: "_id", as: "arrivalPort" } },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$arrivalPort", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$freightPort", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$navigationalWaye", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    carBodyNumber: "$carBodyNumber",
                    refranceNumber: "$refranceNumber",
                    carMark: "$carMark",
                    arrivalDate: "$arrivalDate",
                    clinetName: { $ifNull: ["$clinet.name", "$clinetName"] },
                    clinetPhoneNumber: { $ifNull: ["$clinet.phoneNumber", "$clinetPhoneNumber"] },
                    navigationalWayeName: "$navigationalWaye.name",
                    freightPortName: "$freightPort.name",
                    arrivalPortName: "$arrivalPort.name",
                    freightCaseName: 1,
                    containerNumber: 1
                }
            },
            {
                $group: {
                    _id: { $ifNull: ["$containerNumber", 'لم يحدد بعد'] },
                    freights: {
                        $push: "$$ROOT"
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    containerNumber: "$_id",
                    freights: "$freights"
                }
            }
        ]).toArray().then(res => {
            //Check From Length
            if (res.length == 0) {
                //Check For First Time
                if (skip == 0)
                    return response_service_1.ResponseService.end_info(loggedUser, this.r.noRecordesFound);
                return response_service_1.ResponseService.end_info(loggedUser, this.r.noMoreRecordes);
            }
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /** Update Maritime Gain
     مثال على كيفية الحصول على مكسب الشحن البحرى لكل شحنة

سعر الحاوية 3100

عليها اربع سيارات كالاتي
سعر شحن بحري لـ سيارة كبير 990
سعر شحن بحري لـ سيارة متوسطه 890
سعر شحن بحري لـ سيارة صغيرة 790
سعر شحن بحري لـ سيارة صغيرة 790

اجمالى سعر شحن الشحنات البحري  = سعر السيارة الاولى + سعر الثانسة + سعر الثالثة + سعر الرابعة
        3460$	  = 990 + 890 + 790 +  790

اجمالى المكسب البحري = سعر الحاوية - اجمالى سعر شحن الشحنات البحري
        360 = 3100- 3460

مكسب الشحن البحري  للشحنة =  / على عدد الشحنات
        90 = 360 / 5

تكون هده القيمة هي قيمة مكسب البحري على الشحنه
     */
    updateMaritimeGain(containerNumber) {
        if (!containerNumber || containerNumber == "null")
            return;
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            { $match: { containerNumber } },
            {
                $group: {
                    _id: {
                        containerNumber: '$containerNumber',
                        containerPrice: "$containerPrice"
                    },
                    //عدد الشحنات
                    count: { $sum: 1 },
                    //اجمالى سعر شحن الشحنات البحري
                    maritimeFreightPriceTotal: { $sum: "$maritimeFreightPrice" },
                }
            },
        ]).toArray().then(transactions => {
            if (!transactions.length)
                return;
            let tran = transactions[0];
            //نجلب سعر الحاوية من اول شحنة .. وذالك لان كل الشحنات لديها نفس سعر الحاوية الى فى نفس الحاوية
            let containerPrice = +tran._id.containerPrice;
            //اجمالى سعر شحن الشحنات البحري
            let maritimeFreightPriceTotal = tran.maritimeFreightPriceTotal;
            //اجمالى المكسب البحري 
            let maritimeGainTotal = (containerPrice - maritimeFreightPriceTotal) || 0;
            maritimeGainTotal = maritimeGainTotal <= 0 ? 0 : maritimeGainTotal;
            //المكسب البحري للشحنة
            let maritimeGain = (maritimeGainTotal / tran.count) || 0;
            maritimeGain = maritimeGain <= 0 ? 0 : maritimeGain;
            // تكلفة بحري = سعر الحاوية عععلى عدد الشحنات
            let maritimeCost = (containerPrice / tran.count) || 0;
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).updateMany({ containerNumber }, {
                $set: {
                    maritimeGain,
                    maritimeCost
                }
            });
        }).catch(error => { console.log(containerNumber, error); });
    }
} //End Class
exports.ContainerModule = ContainerModule;
