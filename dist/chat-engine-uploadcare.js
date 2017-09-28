(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {

    const package = require('../package.json');
    window.ChatEngineCore.plugin[package.name] = require('../src/plugin.js');

})();

},{"../package.json":2,"../src/plugin.js":3}],2:[function(require,module,exports){
module.exports={
  "author": "Ian Jennings",
  "name": "chat-engine-uploadcare",
  "version": "0.0.3",
  "main": "src/plugin.js",
  "dependencies": {
    "chat-engine": "^0.4.2"
  }
}

},{}],3:[function(require,module,exports){
/**
* Emits the ```$uploadCare.upload``` event when UploadCare completes an uplaod 
* @module chat-engine-uploadcare
* @requires {@link ChatEngine}
*/

/**
* @function
* @example
* Include the [Uploadcare](https://uploadcare.com) Javascript files and configure the widget. Check out the [Uploadcare Widget Docs](https://uploadcare.com/documentation/javascript_api/v2/) for more information.
* 
* ```html
* <script>
*   UPLOADCARE_LOCALE = "en";
*   UPLOADCARE_TABS = "file url facebook gdrive dropbox instagram evernote flickr skydrive";
*   UPLOADCARE_PUBLIC_KEY = "YOUR_UPLOADCARE_KEY";
* </script>
* <script charset="utf-8" src="//ucarecdn.com/libs/widget/2.10.3/uploadcare.full.min.js"></script>
* 
* <script src="dist/chat-engine-uploadcare.js" type="text/javascript"></script>
* ```
* ```js
* // initialize the UploadCare Widget
* let widget = uploadcare.Widget('[role=uploadcare-uploader]');
* 
* // create a new ChatEngine Chat.
* let chat = new ChatEngine.Chat('uploads');
* 
* // add the plugin to the Chat.
* chat.plugin(ChatEngineCore.plugin['chat-engine-uploadcare']());
* 
* // bind the widget to the Chat.
* chat.uploadcare.bind(widget);
* 
* Listen to upload events from the {@link Chat}.
* chat.on('$uploadcare.upload', (payload) => {
*     console.log('upload', payload.data.cdnUrl, 'from', payload.sender.uuid);
* });
* ```
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni4xMS4wL2xpYi9ub2RlX21vZHVsZXMvY2hhdC1lbmdpbmUtcGx1Z2luL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wL3dyYXAuanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBwYWNrYWdlID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJyk7XG4gICAgd2luZG93LkNoYXRFbmdpbmVDb3JlLnBsdWdpbltwYWNrYWdlLm5hbWVdID0gcmVxdWlyZSgnLi4vc3JjL3BsdWdpbi5qcycpO1xuXG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcImF1dGhvclwiOiBcIklhbiBKZW5uaW5nc1wiLFxuICBcIm5hbWVcIjogXCJjaGF0LWVuZ2luZS11cGxvYWRjYXJlXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4zXCIsXG4gIFwibWFpblwiOiBcInNyYy9wbHVnaW4uanNcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiY2hhdC1lbmdpbmVcIjogXCJeMC40LjJcIlxuICB9XG59XG4iLCIvKipcbiogRW1pdHMgdGhlIGBgYCR1cGxvYWRDYXJlLnVwbG9hZGBgYCBldmVudCB3aGVuIFVwbG9hZENhcmUgY29tcGxldGVzIGFuIHVwbGFvZCBcbiogQG1vZHVsZSBjaGF0LWVuZ2luZS11cGxvYWRjYXJlXG4qIEByZXF1aXJlcyB7QGxpbmsgQ2hhdEVuZ2luZX1cbiovXG5cbi8qKlxuKiBAZnVuY3Rpb25cbiogQGV4YW1wbGVcbiogSW5jbHVkZSB0aGUgW1VwbG9hZGNhcmVdKGh0dHBzOi8vdXBsb2FkY2FyZS5jb20pIEphdmFzY3JpcHQgZmlsZXMgYW5kIGNvbmZpZ3VyZSB0aGUgd2lkZ2V0LiBDaGVjayBvdXQgdGhlIFtVcGxvYWRjYXJlIFdpZGdldCBEb2NzXShodHRwczovL3VwbG9hZGNhcmUuY29tL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdF9hcGkvdjIvKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiogXG4qIGBgYGh0bWxcbiogPHNjcmlwdD5cbiogICBVUExPQURDQVJFX0xPQ0FMRSA9IFwiZW5cIjtcbiogICBVUExPQURDQVJFX1RBQlMgPSBcImZpbGUgdXJsIGZhY2Vib29rIGdkcml2ZSBkcm9wYm94IGluc3RhZ3JhbSBldmVybm90ZSBmbGlja3Igc2t5ZHJpdmVcIjtcbiogICBVUExPQURDQVJFX1BVQkxJQ19LRVkgPSBcIllPVVJfVVBMT0FEQ0FSRV9LRVlcIjtcbiogPC9zY3JpcHQ+XG4qIDxzY3JpcHQgY2hhcnNldD1cInV0Zi04XCIgc3JjPVwiLy91Y2FyZWNkbi5jb20vbGlicy93aWRnZXQvMi4xMC4zL3VwbG9hZGNhcmUuZnVsbC5taW4uanNcIj48L3NjcmlwdD5cbiogXG4qIDxzY3JpcHQgc3JjPVwiZGlzdC9jaGF0LWVuZ2luZS11cGxvYWRjYXJlLmpzXCIgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPjwvc2NyaXB0PlxuKiBgYGBcbiogYGBganNcbiogLy8gaW5pdGlhbGl6ZSB0aGUgVXBsb2FkQ2FyZSBXaWRnZXRcbiogbGV0IHdpZGdldCA9IHVwbG9hZGNhcmUuV2lkZ2V0KCdbcm9sZT11cGxvYWRjYXJlLXVwbG9hZGVyXScpO1xuKiBcbiogLy8gY3JlYXRlIGEgbmV3IENoYXRFbmdpbmUgQ2hhdC5cbiogbGV0IGNoYXQgPSBuZXcgQ2hhdEVuZ2luZS5DaGF0KCd1cGxvYWRzJyk7XG4qIFxuKiAvLyBhZGQgdGhlIHBsdWdpbiB0byB0aGUgQ2hhdC5cbiogY2hhdC5wbHVnaW4oQ2hhdEVuZ2luZUNvcmUucGx1Z2luWydjaGF0LWVuZ2luZS11cGxvYWRjYXJlJ10oKSk7XG4qIFxuKiAvLyBiaW5kIHRoZSB3aWRnZXQgdG8gdGhlIENoYXQuXG4qIGNoYXQudXBsb2FkY2FyZS5iaW5kKHdpZGdldCk7XG4qIFxuKiBMaXN0ZW4gdG8gdXBsb2FkIGV2ZW50cyBmcm9tIHRoZSB7QGxpbmsgQ2hhdH0uXG4qIGNoYXQub24oJyR1cGxvYWRjYXJlLnVwbG9hZCcsIChwYXlsb2FkKSA9PiB7XG4qICAgICBjb25zb2xlLmxvZygndXBsb2FkJywgcGF5bG9hZC5kYXRhLmNkblVybCwgJ2Zyb20nLCBwYXlsb2FkLnNlbmRlci51dWlkKTtcbiogfSk7XG4qIGBgYFxuKi9cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuXG4gICAgY2xhc3MgZXh0ZW5zaW9uIHtcblxuICAgICAgICAvKipcbiAgICAgICAgQmluZCBhIHtAbGluayBDaGF0fSB0byBhbiBVcGxvYWRjYXJlIHdpZGdldC4gVGhlIENoYXQgd2lsbCB0aGVuIGZpcmUgJHVwbG9hZGNhcmUudXBsb2FkIGV2ZW50cyB3aGVuIFVwbG9hZGNhcmUgZGV0ZWN0cyBhbmQgdXBsb2FkLlxuICAgICAgICBAbWV0aG9kIHVwbG9hZGNhcmVcIi5cImJpbmRcbiAgICAgICAgQGNlZXh0ZW5kcyBDaGF0XG4gICAgICAgICovXG4gICAgICAgIGJpbmQod2lkZ2V0KSB7XG5cbiAgICAgICAgICAgIGlmKCF3aWRnZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNdXN0IHN1cHBseSBhbiB1cGxvYWRjYXJlIHdpZGdldC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lkZ2V0Lm9uVXBsb2FkQ29tcGxldGUoKGluZm8pID0+IHtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICogRmlyZWQgd2hlbiBhIHVzZXIgdXBsb2FkcyBhIGZpbGUgdmlhIHRoZSBVcGxvYWRjYXJlIHdpZGdldC5cbiAgICAgICAgICAgICAgICAqIEBldmVudCAkdXBsb2FkY2FyZVwiLlwidXBsb2FkXG4gICAgICAgICAgICAgICAgKiBAcGFyYW0gcGF5bG9hZCB7T2JqZWN0fVxuICAgICAgICAgICAgICAgICogQHBhcmFtIHBheWxvYWQuZGF0YSB7T2JqZWN0fSBUaGUgW1VwbG9hZGNhcmUgZmlsZUluZm9dKGh0dHBzOi8vdXBsb2FkY2FyZS5jb20vZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0X2FwaS92Mi8jZmlsZS1pbmZvKS5cbiAgICAgICAgICAgICAgICAqIEBjZWV4dGVuZHMgQ2hhdFxuICAgICAgICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgICAgICAqIGNoYXQub24oJyR1cGxvYWRjYXJlLnVwbG9hZCcsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICAgICAgKiAgICAgY29uc29sZS5sb2coJ3VwbG9hZCcsIHBheWxvYWQuZGF0YS5jZG5VcmwsICdmcm9tJywgcGF5bG9hZC5zZW5kZXIudXVpZCk7XG4gICAgICAgICAgICAgICAgKiB9KTtcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmVtaXQoWyckdXBsb2FkY2FyZScsICd1cGxvYWQnXS5qb2luKCcuJyksIGluZm8pO1xuICAgICAgICAgICAgICAgIHdpZGdldC52YWx1ZShudWxsKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCB0aGlzIHBsdWdpbiB0byB0aGUgQ2hhdCBjbGFzc2VzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZXNwYWNlOiAndXBsb2FkY2FyZScsXG4gICAgICAgIGV4dGVuZHM6IHtcbiAgICAgICAgICAgIENoYXQ6IGV4dGVuc2lvblxuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=
