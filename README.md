# Uploadcare Plugin for Chat Engine

Adds the ability to upload images in ChatEngine.Chats via UploadCare service

### Quick Start

0. Have ChatEngine instantiated and connected, and have a channel you want to upload images on
```javascript
const CE = ChatEngineCore.create({
    publishKey: 'pub-key-here',
    subscribeKey: 'sub-key-here',
});

CE.connect('Username');
CE.on('$.ready', () => { ... }
```

1. Attach this plugin to the channel you want, in this case global
```javascript
CE.global.plugin(ChatEngineCore.plugin['chat-engine-uploadcare']());
```

2. Bind UploadCare to a UI element
```javascript
const widget = uploadcare.Widget('[role=uploadcare-uploader]');
CE.global.uploadcare.bind(widget);
```

3. Listen for the `$uploadcare.upload` events on your channel
```javascript
CE.global.on('$uploadcare.upload', (payload) => {
    console.log(payload.data.cdnUrl);
});
```
