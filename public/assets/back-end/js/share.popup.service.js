class SharePopupService {

    /**
     * Open Popup For Share Link
     * @param {*} popId 
     */
    static open(popId) {
        document.getElementsByClassName('popUp-overlay')[0].classList.add('opened');
        document.getElementById(popId).classList.add('opened');
    }

    /**
     * Close Popup For Share Link
     * @param {*} popId 
     */
    static close(popId) {
        document.getElementsByClassName('popUp-overlay')[0].classList.remove('opened');
        document.getElementById(popId).classList.remove('opened');
    }

    /**
     * 
     * @param {string} url 
     * @param {string} target 
     */
    static share(url,text, shareOnType) {
        this[`share_${shareOnType}`](url,text);
    }

    /**Share Now */
    static shareNow(fullUrl) {
        window.open(fullUrl, '', "width=700,height=400");
    }

    /*** Share Url On Facebook*/
    static share_facebook(url,text) { this.shareNow(`https://www.facebook.com/sharer.php?u=${url}`); };
    /*** Share Url On Twitter*/
    static share_twitter(url,text) { this.shareNow(`https://twitter.com/intent/tweet?url=${url}&text=${url}: ${text}`); };
    /*** Share Url On Linkedin*/
    static share_linkedin(url,text) { this.shareNow(`https://www.linkedin.com/shareArticle?url=${url}&title=${text}`); };
    /*** Share Url On Reddit*/
    static share_reddit(url,text) { this.shareNow(`https://reddit.com/submit?url=${url}&title=${text}`); };
    /*** Share Url On Messanger*/
    static share_messenger(url,text) {
        if (this.isOpenFromMobile)
            this.shareNow(`fb-messenger://share/?link=${url}&app_id=${this.faceBookAppId}`);
        else
            this.shareNow(`https://www.facebook.com/dialog/send?link=${url}&app_id=${this.faceBookAppId}&redirect_uri=${url}`);
    };

    /*** Share Url On Whatsapp*/
    static share_whataApp(url,text) {
        if (this.isOpenFromMobile)
            this.shareNow(`whatsapp://send?text=${url}: ${text}`);
        else
            this.shareNow(`https://web.whatsapp.com/send?text=${url}:${text}`);
    };
    /*** Share Url On Telegram*/
    static share_telegram(url,text) { this.shareNow(`https://t.me/share/url?url=${url}&text=${text}&to=`); };
    /*** Share Url On Gmail*/
    static share_gmail(url,text) { this.shareNow(`https://mail.google.com/mail/?view=cm&su=${text}&body=${url}: ${text}&to=&su=&bcc=&cc=`); };
    /*** Share Url On Email*/
    static share_email(url,text) { this.shareNow(`mailto:?to=&subject=${text}&body=${url}: ${text}`); };
    /*** Share Url On Blogger*/
    static share_blogger(url,text) { this.shareNow(`https://www.blogger.com/blog-this.g?u=${url}&t=${text}&n=${text}`); };
    /*** Share Url On Wordpress*/
    static share_wordpress(url,text) { this.shareNow(`http://wordpress.com/wp-admin/press-this.php?u=${url}&t=${text}&s=${text}&i=`); };


}