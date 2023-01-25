(function () {

    document.onkeydown = function () {
        if (window.event && (window.event.keyCode == 123|| window.event.keyCode == 73)) {
            event.keyCode = 0;
            event.returnValue = false;
            console.log("不要扒我代码!");
            return false;
        }
    }
    document.onkeydown = function () {
        if (window.event && (window.event.keyCode == 123|| window.event.keyCode == 73)) {
            event.keyCode = 0;
            event.returnValue = false;
            console.log("不要扒我代码!");
            return false;
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

    /**
    * 尝试阻止开发者模式
    * @type {HTMLElement}
    */
    var fuck = document.createElement('div');
    Object.defineProperty(fuck, 'id', {
        get: function () {
            console.log("Hello World!");
            location.href = "about:blank";
            history.replaceState();
        }
    });
    console.log(fuck);
})();