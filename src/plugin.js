/**
@module chat-engine-uploadcare
@requires {@link ChatEngine}
*/

/**
 * @function
 * @description
Include the [Uploadcare](https://uploadcare.com) Javascript files and configure the widget. Check out the [Uploadcare Widget Docs](https://uploadcare.com/documentation/javascript_api/v2/) for more information.

```html
<script>
  UPLOADCARE_LOCALE = "en";
  UPLOADCARE_TABS = "file url facebook gdrive dropbox instagram evernote flickr skydrive";
  UPLOADCARE_PUBLIC_KEY = "YOUR_UPLOADCARE_KEY";
</script>
<script charset="utf-8" src="//ucarecdn.com/libs/widget/2.10.3/uploadcare.full.min.js"></script>

<script src="dist/chat-engine-uploadcare.js" type="text/javascript"></script>
```

Initialize the ```uploadcare.Widget```.

```js
let widget = uploadcare.Widget('[role=uploadcare-uploader]');
```

Create a new ChatEngine {@link Chat}.

```js
let chat = new ChatEngine.Chat('uploads');
```

Add the plugin to the {@link Chat}.

```js
chat.plugin(ChatEngineCore.plugin['chat-engine-uploadcare']());
```

Bind the widget to the {@link Chat}.

```js
chat.uploadcare.bind(widget);
```

Listen to upload events from the {@link Chat}.

```js
chat.on('$uploadcare.upload', (payload) => {
    console.log('upload', payload.data.cdnUrl, 'from', payload.sender.uuid);
});
```
 */
module.exports = () => {

    class extension {

        /**
        Bind a {@link Chat} to an Uploadcare widget. The Chat will then fire $uploadcare.upload events when Uploadcare detects and upload.
        @method uploadcare"."bind
        @ceextends Chat
        */
        bind(widget) {

            if(!widget) {
                console.error('Must supply an uploadcare widget.');
            }

            widget.onUploadComplete((info) => {

                /**
                * Fired when a user uploads a file via the Uploadcare widget.
                * @event $uploadcare"."upload
                * @param payload {Object}
                * @param payload.data {Object} The [Uploadcare fileInfo](https://uploadcare.com/documentation/javascript_api/v2/#file-info).
                * @ceextends Chat
                * @example
                * chat.on('$uploadcare.upload', (payload) => {
                *     console.log('upload', payload.data.cdnUrl, 'from', payload.sender.uuid);
                * });
                */
                this.parent.emit(['$uploadcare', 'upload'].join('.'), info);
                widget.value(null);

            });

        }
    }

    // add this plugin to the Chat classes
    return {
        namespace: 'uploadcare',
        extends: {
            Chat: extension
        }
    }

}
