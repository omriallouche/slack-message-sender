# SlackMessageSender
A vanilla Javascript function for easily sending messages to a Slack channel.

It follows [guidelines](https://api.slack.com/incoming-webhooks) from Slack, and allows simple sending to a channel by name, sending object as data, and callback operations using a Promise.

[Demo](https://omriallouche.github.io/SlackMessageSender)

## Getting started:
  - Include `sendSlackMessage.js`:
```html
<script src="src/sendSlackMessage.js"></script>
```
- Create new `SlackMessageSender` instance: 
```javascript
var sSender = new SlackMessageSender()
```

## How to use:
#### Enable webhooks in your Slack channels
Follow [this guide](https://cdsta.slack.com/apps/new/A0F7XDUAZ-incoming-webhooks){:target="_blank"} from Slack.

#### Send a message directly to a Slack Webhook URL:
```javascript
sSender.sendMessage("https://hooks.slack.com/services/...", "Sample string").then(function () {
        console.log("Message sent");
    }, function (e) {
        console.log("Error", e);
});
```
#### "Phone Book": Send a message to channel:
Optionally, you can pass a list of channels when creating `SlackMessageSender`:
```javascript
var sSender = new SlackMessageSender({
    channels: {
        '#channel1': "%CHANNEL_1_URL",
        '#channel2': "%CHANNEL_2_URL",
        ...
    }
})
```

This allows you to call `sendMessage()` with the channel name, instead of its webhook url:

```javascript
sSender.sendMessage("#test_channel", "Sample string").then(function () {
        console.log("Message sent");
    }, function (e) {
        console.log("Error", e);
});
```

#### Send a JSON object to channel:
```javascript
var sampleObj = { sampleProperty : "test" };
sSender.sendMessage("#test_channel", sampleObj).then(function () {
        console.log("Message sent");
    }, function (e) {
        console.log("Error", e);
});
```

#### Send a message/JSON with attachments:
```javascript
var attachments = [{
        "fallback": "The attachement isn't supported.",
        "title": "Hello from otonomic!",
        "color": "#f54400",
        "author_name": "Otonomic",
        "author_link": "http://otonomic.com",
        "author_icon": "https://pbs.twimg.com/profile_images/498767814031720448/Rah_wb4Q.png",
    }];
    
sSender.sendMessage("#test_channel", "Message with attachments",attachments).then(function () {
        console.log("Message sent");
    }, function (e) {
        console.log("Error", e);
});
```


## Attributes:
SlackMessageSender.sendMessage(`channel`, `message`, `attachments`)

 - `channel` - Slack channel Webhook URL or channel name (you can use channel name only if you pass channels list when creating `SlackMessageSender`)
 - `message` - String or object
 - `attachments` - List of attachments, e.g.
```javascript
[{
     "fallback": "The attachement isn't supported.",
     "title": "Hello from otonomic!",
     "color": "#f54400",
     "author_name": "Otonomic",
     "author_link": "http://otonomic.com",
     "author_icon": "https://pbs.twimg.com/profile_images/498767814031720448/Rah_wb4Q.png",
}];
```

Note that `SlackMessageSender.sendMessage` returns a `Promise`.

## Contributing
Pull requests are welcome!



 
