(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {

    const package = require('../package.json');
    window.ChatEngineCore.plugin[package.name] = require('../src/plugin.js');

})();

},{"../package.json":2,"../src/plugin.js":3}],2:[function(require,module,exports){
module.exports={
  "author": "Ian Jennings",
  "name": "chat-engine-uploadcare",
  "version": "0.0.8",
  "main": "src/plugin.js",
  "dependencies": {
    "chat-engine": "^0.8.0"
  }
}

},{}],3:[function(require,module,exports){
/**
* Emits the ```$uploadCare.upload``` event when UploadCare completes an uplaod
* @module chat-engine-uploadcare
* @requires {@link ChatEngine}
*/

/**
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
* @function
* @example
* Include the [Uploadcare](https://uploadcare.com) Javascript files and configure the widget. Check out the [Uploadcare Widget Docs](https://uploadcare.com/documentation/javascript_api/v2/) for more information.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni4xMS40L2xpYi9ub2RlX21vZHVsZXMvY2hhdC1lbmdpbmUtcGx1Z2luL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wL3dyYXAuanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgcGFja2FnZSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuICAgIHdpbmRvdy5DaGF0RW5naW5lQ29yZS5wbHVnaW5bcGFja2FnZS5uYW1lXSA9IHJlcXVpcmUoJy4uL3NyYy9wbHVnaW4uanMnKTtcblxufSkoKTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJhdXRob3JcIjogXCJJYW4gSmVubmluZ3NcIixcbiAgXCJuYW1lXCI6IFwiY2hhdC1lbmdpbmUtdXBsb2FkY2FyZVwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuOFwiLFxuICBcIm1haW5cIjogXCJzcmMvcGx1Z2luLmpzXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImNoYXQtZW5naW5lXCI6IFwiXjAuOC4wXCJcbiAgfVxufVxuIiwiLyoqXG4qIEVtaXRzIHRoZSBgYGAkdXBsb2FkQ2FyZS51cGxvYWRgYGAgZXZlbnQgd2hlbiBVcGxvYWRDYXJlIGNvbXBsZXRlcyBhbiB1cGxhb2RcbiogQG1vZHVsZSBjaGF0LWVuZ2luZS11cGxvYWRjYXJlXG4qIEByZXF1aXJlcyB7QGxpbmsgQ2hhdEVuZ2luZX1cbiovXG5cbi8qKlxuKiBgYGBodG1sXG4qIDxzY3JpcHQ+XG4qICAgVVBMT0FEQ0FSRV9MT0NBTEUgPSBcImVuXCI7XG4qICAgVVBMT0FEQ0FSRV9UQUJTID0gXCJmaWxlIHVybCBmYWNlYm9vayBnZHJpdmUgZHJvcGJveCBpbnN0YWdyYW0gZXZlcm5vdGUgZmxpY2tyIHNreWRyaXZlXCI7XG4qICAgVVBMT0FEQ0FSRV9QVUJMSUNfS0VZID0gXCJZT1VSX1VQTE9BRENBUkVfS0VZXCI7XG4qIDwvc2NyaXB0PlxuKiA8c2NyaXB0IGNoYXJzZXQ9XCJ1dGYtOFwiIHNyYz1cIi8vdWNhcmVjZG4uY29tL2xpYnMvd2lkZ2V0LzIuMTAuMy91cGxvYWRjYXJlLmZ1bGwubWluLmpzXCI+PC9zY3JpcHQ+XG4qXG4qIDxzY3JpcHQgc3JjPVwiZGlzdC9jaGF0LWVuZ2luZS11cGxvYWRjYXJlLmpzXCIgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPjwvc2NyaXB0PlxuKiBgYGBcbiogYGBganNcbiogLy8gaW5pdGlhbGl6ZSB0aGUgVXBsb2FkQ2FyZSBXaWRnZXRcbiogbGV0IHdpZGdldCA9IHVwbG9hZGNhcmUuV2lkZ2V0KCdbcm9sZT11cGxvYWRjYXJlLXVwbG9hZGVyXScpO1xuKlxuKiAvLyBjcmVhdGUgYSBuZXcgQ2hhdEVuZ2luZSBDaGF0LlxuKiBsZXQgY2hhdCA9IG5ldyBDaGF0RW5naW5lLkNoYXQoJ3VwbG9hZHMnKTtcbipcbiogLy8gYWRkIHRoZSBwbHVnaW4gdG8gdGhlIENoYXQuXG4qIGNoYXQucGx1Z2luKENoYXRFbmdpbmVDb3JlLnBsdWdpblsnY2hhdC1lbmdpbmUtdXBsb2FkY2FyZSddKCkpO1xuKlxuKiAvLyBiaW5kIHRoZSB3aWRnZXQgdG8gdGhlIENoYXQuXG4qIGNoYXQudXBsb2FkY2FyZS5iaW5kKHdpZGdldCk7XG4qXG4qIExpc3RlbiB0byB1cGxvYWQgZXZlbnRzIGZyb20gdGhlIHtAbGluayBDaGF0fS5cbiogY2hhdC5vbignJHVwbG9hZGNhcmUudXBsb2FkJywgKHBheWxvYWQpID0+IHtcbiogICAgIGNvbnNvbGUubG9nKCd1cGxvYWQnLCBwYXlsb2FkLmRhdGEuY2RuVXJsLCAnZnJvbScsIHBheWxvYWQuc2VuZGVyLnV1aWQpO1xuKiB9KTtcbiogYGBgXG4qIEBmdW5jdGlvblxuKiBAZXhhbXBsZVxuKiBJbmNsdWRlIHRoZSBbVXBsb2FkY2FyZV0oaHR0cHM6Ly91cGxvYWRjYXJlLmNvbSkgSmF2YXNjcmlwdCBmaWxlcyBhbmQgY29uZmlndXJlIHRoZSB3aWRnZXQuIENoZWNrIG91dCB0aGUgW1VwbG9hZGNhcmUgV2lkZ2V0IERvY3NdKGh0dHBzOi8vdXBsb2FkY2FyZS5jb20vZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0X2FwaS92Mi8pIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuKi9cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuXG4gICAgY2xhc3MgZXh0ZW5zaW9uIHtcblxuICAgICAgICAvKipcbiAgICAgICAgQmluZCBhIHtAbGluayBDaGF0fSB0byBhbiBVcGxvYWRjYXJlIHdpZGdldC4gVGhlIENoYXQgd2lsbCB0aGVuIGZpcmUgJHVwbG9hZGNhcmUudXBsb2FkIGV2ZW50cyB3aGVuIFVwbG9hZGNhcmUgZGV0ZWN0cyBhbmQgdXBsb2FkLlxuICAgICAgICBAbWV0aG9kIHVwbG9hZGNhcmVcIi5cImJpbmRcbiAgICAgICAgQGNlZXh0ZW5kcyBDaGF0XG4gICAgICAgICovXG4gICAgICAgIGJpbmQod2lkZ2V0KSB7XG5cbiAgICAgICAgICAgIGlmKCF3aWRnZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNdXN0IHN1cHBseSBhbiB1cGxvYWRjYXJlIHdpZGdldC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lkZ2V0Lm9uVXBsb2FkQ29tcGxldGUoKGluZm8pID0+IHtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICogRmlyZWQgd2hlbiBhIHVzZXIgdXBsb2FkcyBhIGZpbGUgdmlhIHRoZSBVcGxvYWRjYXJlIHdpZGdldC5cbiAgICAgICAgICAgICAgICAqIEBldmVudCAkdXBsb2FkY2FyZVwiLlwidXBsb2FkXG4gICAgICAgICAgICAgICAgKiBAcGFyYW0gcGF5bG9hZCB7T2JqZWN0fVxuICAgICAgICAgICAgICAgICogQHBhcmFtIHBheWxvYWQuZGF0YSB7T2JqZWN0fSBUaGUgW1VwbG9hZGNhcmUgZmlsZUluZm9dKGh0dHBzOi8vdXBsb2FkY2FyZS5jb20vZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0X2FwaS92Mi8jZmlsZS1pbmZvKS5cbiAgICAgICAgICAgICAgICAqIEBjZWV4dGVuZHMgQ2hhdFxuICAgICAgICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgICAgICAqIGNoYXQub24oJyR1cGxvYWRjYXJlLnVwbG9hZCcsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICAgICAgKiAgICAgY29uc29sZS5sb2coJ3VwbG9hZCcsIHBheWxvYWQuZGF0YS5jZG5VcmwsICdmcm9tJywgcGF5bG9hZC5zZW5kZXIudXVpZCk7XG4gICAgICAgICAgICAgICAgKiB9KTtcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmVtaXQoWyckdXBsb2FkY2FyZScsICd1cGxvYWQnXS5qb2luKCcuJyksIGluZm8pO1xuICAgICAgICAgICAgICAgIHdpZGdldC52YWx1ZShudWxsKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCB0aGlzIHBsdWdpbiB0byB0aGUgQ2hhdCBjbGFzc2VzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZXNwYWNlOiAndXBsb2FkY2FyZScsXG4gICAgICAgIGV4dGVuZHM6IHtcbiAgICAgICAgICAgIENoYXQ6IGV4dGVuc2lvblxuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=
