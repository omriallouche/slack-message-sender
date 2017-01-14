// Create an immediately invoked functional expression to wrap our code
(function () {
    this.SlackMessageSender = function () {

        this.channels = {};

        if (arguments[0] && typeof arguments[0] === "object") {
            if (arguments[0].channels) {
                this.channels = arguments[0].channels;
            }

        }
    };

    SlackMessageSender.prototype.sendMessage = function (url, params, attachments) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (url.indexOf('#') === 0) {
                url = self.channels[url];
            }

            var slack_msg = '';
            if (params.title) {
                slack_msg += params.title + '\n';
                delete(params.title);
            }
            if (typeof params !== "string") {
                for (var key in params) {
                    var element = params[key];
                    try {
                        var el = JSON.parse(element);
                        slack_msg += key + ': ' + element.replace(/"/g, '`') + '\\n';
                    } catch (e) {
                        try {
                            slack_msg += key + ': ' + JSON.stringify(element).replace(/"/g, '`') + '\\n';
                        } catch (e2) {

                        }
                    }
                }
            } else {
                slack_msg = params;
            }


            payload = {text: slack_msg};
            if (attachments) {
                payload.attachments = attachments;
            }
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('POST', url, true);
            xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttp.onload = function (e) {
                if (xmlhttp.readyState === 4) {
                    if (xmlhttp.status === 200) {
                        resolve();
                    }
                }
            };
            xmlhttp.onerror = function (e) {
                reject();
            };
            xmlhttp.send("payload=" + JSON.stringify(payload));
        });
    };

}());