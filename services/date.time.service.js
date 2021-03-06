"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeService = void 0;
const basic_module_1 = require("../modules/basic.module");
class DateTimeService extends basic_module_1.BasicModule {
    constructor(loggedUser) {
        super();
        this.loggedUser = loggedUser;
        /**
         * hours*minutes*seconds*milliseconds
         */
        this.oneDay = 24 * 60 * 60 * 1000;
        /**
         * minutes*seconds*milliseconds
         *  */
        this.oneHaour = 60 * 60 * 1000;
        /**
         * seconds*milliseconds
         *  */
        this.oneMinute = 60 * 1000;
        /**
         * milliseconds
         *  */
        this.oneSecound = 1000;
    }
    /** Get Date Manual */
    static get getDateNowManual() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    }
    /**
     * calculate the number of days between two dates
     */
    static calculateNumberDays(youreDate, tampCount) {
        // To calculate the time difference of two dates 
        var difference_In_Time = youreDate.getTime() - new Date().getTime();
        // To calculate the no. of days between two dates 
        var difference_In_Days = difference_In_Time / (1000 * 3600 * 24);
        return difference_In_Days || tampCount;
    }
    /**
 * Get Date Since
 */
    getDateTimeSince(firstDate, secondDate) {
        // let secondDate:Date = new Date();
        // secondDate = new Date(secondDate.getFullYear(), secondDate.getMonth() + 1, secondDate.getDate(), secondDate.getHours(), secondDate.getMinutes(), secondDate.getSeconds())
        let numberOfYears = Math.floor(Math.abs((firstDate - secondDate) / this.oneDay / 365));
        let numberOfMonths = Math.floor(Math.abs((firstDate - secondDate) / this.oneDay / 30));
        let numberOfDays = Math.floor(Math.abs(firstDate - secondDate) / this.oneDay);
        let numberOfHours = Math.floor(Math.abs(firstDate - secondDate) / this.oneHaour);
        let numberOfMinutes = Math.floor(Math.abs(firstDate - secondDate) / this.oneMinute);
        let numberOfSecounds = Math.floor(Math.abs(firstDate - secondDate) / this.oneSecound);
        //Check If Years Ago 
        // if (numberOfYears > 0)
        //     return `${this.getNumberOfYearsValue(numberOfYears)}${this.getNumberOfMonthsValue(Math.abs(numberOfMonths - (numberOfYears * 12)), true)}Ago`;
        // //Check If Months Ago 
        // else if (numberOfMonths > 0)
        //     return `${this.getNumberOfMonthsValue(numberOfMonths)}${this.getNumberOfDaysValue(Math.abs(numberOfDays - (numberOfMonths * 30)), true)}Ago`;
        // //Check If Days Ago 
        // else if (numberOfDays > 0)
        //     return `${this.getNumberOfDaysValue(numberOfDays)}${this.getNumberOfHouresValue(Math.abs(numberOfHours - (numberOfDays * 24)), true)}Ago`;
        // //Check If Hours Ago 
        // else if (numberOfHours > 0)
        //     return `${this.getNumberOfHouresValue(numberOfHours)}${this.getNumberOfMinutesValue(Math.abs(numberOfMinutes - (numberOfHours * 60)), true)}Ago`;
        // //Check If Minutes Ago 
        // else if (numberOfMinutes > 0)
        //     return `${this.getNumberOfMinutesValue(numberOfMinutes)}${this.getNumberOfSecoundsValue(Math.abs(numberOfSecounds - (numberOfMinutes * 60)), true)}Ago`;
        // else return 'Just Now';
        if (numberOfYears > 0)
            return this.concatAgo(this.getNumberOfYearsValue(numberOfYears));
        //Check If Months Ago 
        else if (numberOfMonths > 0)
            return this.concatAgo(this.getNumberOfMonthsValue(numberOfMonths));
        //Check If Days Ago 
        else if (numberOfDays > 0)
            return this.concatAgo(this.getNumberOfDaysValue(numberOfDays));
        else if (numberOfHours > 0)
            return this.concatAgo(this.getNumberOfHouresValue(numberOfHours));
        //Check If Minutes Ago 
        else if (numberOfMinutes > 0)
            return this.concatAgo(this.getNumberOfMinutesValue(numberOfMinutes));
        //Check If Secounds Ago 
        else if (numberOfSecounds > 0)
            return this.concatAgo(this.getNumberOfSecoundsValue(numberOfSecounds));
        else
            return this.r.justNow;
    }
    /** Concat Sice With Ago By Current Language Code */
    concatAgo(value) {
        return `${this.r.ago} ${value}`;
    }
    /**
     * Get Number  Of Years Value
     */
    getNumberOfYearsValue(numberOfYears) {
        if (!numberOfYears)
            return '';
        switch (numberOfYears) {
            case 1:
                return this.r.oneYear;
            case 2:
                return this.r.towYears;
            default:
                return `${numberOfYears} ${this.r.years}`;
        }
    }
    /**
     * Get Number  Of Months Value
     */
    getNumberOfMonthsValue(numberOfMonths) {
        if (!numberOfMonths)
            return '';
        switch (numberOfMonths) {
            case 1:
                return this.r.oneMonth;
            case 2:
                return this.r.towMonths;
            default:
                return `${numberOfMonths} ${this.r.months}`;
        }
    }
    /**
     * Get Number  Of Days Value
     */
    getNumberOfDaysValue(numberOfDays) {
        if (!numberOfDays)
            return '';
        switch (numberOfDays) {
            case 1:
                return this.r.oneDay;
            case 2:
                return this.r.towDays;
            default:
                return `${numberOfDays} ${this.r.days}`;
        }
    }
    /**
     * Get Number  Of Hours Value
     */
    getNumberOfHouresValue(numberOfHours) {
        if (!numberOfHours)
            return '';
        switch (numberOfHours) {
            case 1:
                return this.r.oneHour;
            case 2:
                return this.r.towHours;
            default:
                return `${numberOfHours} ${this.r.hours}`;
        }
    }
    /**
     * Get Number  Of Minutes Value
     */
    getNumberOfMinutesValue(numberOfMinutes) {
        if (!numberOfMinutes)
            return '';
        switch (numberOfMinutes) {
            case 1:
                return this.r.oneMinute;
            case 2:
                return this.r.towMinutes;
            default:
                return `${numberOfMinutes} ${this.r.minutes}`;
        }
    }
    /**
     * Get Number Of Secounds Value
     */
    getNumberOfSecoundsValue(numberOfSecounds) {
        if (!numberOfSecounds)
            return '';
        switch (numberOfSecounds) {
            case 1:
                return this.r.oneSecound;
            case 2:
                return this.r.towSecounds;
            default:
                return `${numberOfSecounds} ${this.r.secounds}`;
        }
    }
} //End Class
exports.DateTimeService = DateTimeService;
