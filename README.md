# Uploadcare Plugin for Chat Engine

Adds the ability to upload images in a ChatEngine Chat via [UploadCare](https://uploadcare.com/) service

Check out the [UploadCare Setup Instructions](https://uploadcare.com/documentation/widget/#install)

### Quick Start

0. Have a ChatEngine server running already, instantiate a client and connect it
```js
const ChatEngine = ChatEngineCore.create({
    publishKey: 'pub-key-here',
    subscribeKey: 'sub-key-here'
}, {
    endpoint: 'http://chatengine:server/',
    globalChannel: 'global-channel-name'
});

ChatEngine.connect('Username');
ChatEngine.on('$.ready', () => { ... });
```

1. Attach this plugin to the channel you want, in this case global
```js
ChatEngine.global.plugin(ChatEngineCore.plugin['chat-engine-uploadcare']());
```

2. Bind UploadCare to a UI element
```js
const widget = uploadcare.Widget('[role=uploadcare-uploader]');
ChatEngine.global.uploadcare.bind(widget);
```

3. Listen for the `$uploadcare.upload` events on your channel
```js
ChatEngine.global.on('$uploadcare.upload', (payload) => {
    console.log(payload.data.cdnUrl);
});
```
