(function () {

    var h = window.innerHeight,w=window.innerWidth; 
    window.onresize = function () { 
        if (h!= window.innerHeight||w!=window.innerWidth){ 
            alert("No!不要看我代码/(ㄒoㄒ)/~~");
            window.close(); 
            window.location = "about:blank"; 
        } 
    }
    
    /**
    * 屏蔽右键菜单
    * @param event
    * @returns {boolean}
    */
    document.oncontextmenu = function (event) {
        if (window.event) {
            event = window.event;
        } try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                alert("不准右键😜")
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
    * 屏蔽粘贴
    * @param event
    * @returns {boolean}
    */
    document.onpaste = function (event) {
        if (window.event) {
            event = window.event;
        } try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
    * 屏蔽复制
    * @param event
    * @returns {boolean}
    */
    document.oncopy = function (event) {
        if (window.event) {
            event = window.event;
        } try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
    * 屏蔽剪切
    * @param event
    * @returns {boolean}
    */
    document.oncut = function (event) {
        if (window.event) {
            event = window.event;
        } try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
    * 屏蔽选中
    * @param event
    * @returns {boolean}
    */
    document.onselectstart = function (event) {
        if (window.event) {
            event = window.event;
        } try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    };

    
})();