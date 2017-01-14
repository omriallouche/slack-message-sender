var sSender = new SlackMessageSender({
    channels: {
        '#test': "https://hooks.slack.com/services/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"
    }
});

var attachments = [{
        "fallback": "The attachement isn't supported.",
        "title": "Hello from otonomic!",
        "color": "#f54400",
        "author_name": "Otonomic",
        "author_link": "http://otonomic.com",
        "author_icon": "https://pbs.twimg.com/profile_images/498767814031720448/Rah_wb4Q.png",
    }];


function sendJson() {
    var sampleObj = {
        "glossary": {
            "title": "example glossary",
            "GlossDiv": {
                "title": "S",
                "GlossList": {
                    "GlossEntry": {
                        "ID": "SGML",
                        "SortAs": "SGML",
                        "GlossTerm": "Standard Generalized Markup Language",
                        "Acronym": "SGML",
                        "Abbrev": "ISO 8879:1986",
                        "GlossDef": {
                            "para": "A meta-markup language, used to create markup languages such as DocBook.",
                            "GlossSeeAlso": ["GML", "XML"]
                        },
                        "GlossSee": "markup"
                    }
                }
            }
        }
    };

    sSender.sendMessage("#test", sampleObj).then(function () {
        console.log("Message sent");
    }, function (e) {
        console.log("Error", e);
    });
}


function sendString() {
    sSender.sendMessage("#test", "Sample string", attachments).then(function () {
        console.log("Message sent");
    }, function (e) {
        console.log("Error", e);
    });
}


function sendByUrl() {
    sSender.sendMessage("https://hooks.slack.com/services/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", "Sample string").then(function () {
        console.log("Message sent by channel URL");
    }, function (e) {
        console.log("Error", e);
    });
}






