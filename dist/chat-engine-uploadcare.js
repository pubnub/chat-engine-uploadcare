(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {

    const package = require('../package.json');
    window.OpenChatFramework.plugin[package.name] = require('../src/plugin.js');

})();

},{"../package.json":2,"../src/plugin.js":3}],2:[function(require,module,exports){
module.exports={
  "author": "Ian Jennings",
  "name": "chat-engine-uploadcare",
  "version": "0.0.2",
  "main": "src/plugin.js",
  "dependencies": {
    "chat-engine": "^0.0.4"
  }
}

},{}],3:[function(require,module,exports){
module.exports = (config) => {

    // these are new methods that will be added to the extended class
    class extension {
        bind(widget) {

            if(!widget) {
                console.error('Must supply an uploadcare widget.');
            }

            widget.onUploadComplete((info) => {

                this.parent.emit(['$uploadcare', 'upload'].join('.'), info);
                widget.value(null);

            });

        }
    }

    // add this plugin to the Chat classes
    return {
        namespace: 'uploadcare',
        extends: {
            Chat: extension,
            GlobalChat: extension
        }
    }

}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni43LjAvbGliL25vZGVfbW9kdWxlcy9vY2YtcGx1Z2luL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wL3dyYXAuanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgcGFja2FnZSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuICAgIHdpbmRvdy5PcGVuQ2hhdEZyYW1ld29yay5wbHVnaW5bcGFja2FnZS5uYW1lXSA9IHJlcXVpcmUoJy4uL3NyYy9wbHVnaW4uanMnKTtcblxufSkoKTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJhdXRob3JcIjogXCJJYW4gSmVubmluZ3NcIixcbiAgXCJuYW1lXCI6IFwiY2hhdC1lbmdpbmUtdXBsb2FkY2FyZVwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICBcIm1haW5cIjogXCJzcmMvcGx1Z2luLmpzXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImNoYXQtZW5naW5lXCI6IFwiXjAuMC40XCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoY29uZmlnKSA9PiB7XG5cbiAgICAvLyB0aGVzZSBhcmUgbmV3IG1ldGhvZHMgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBleHRlbmRlZCBjbGFzc1xuICAgIGNsYXNzIGV4dGVuc2lvbiB7XG4gICAgICAgIGJpbmQod2lkZ2V0KSB7XG5cbiAgICAgICAgICAgIGlmKCF3aWRnZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNdXN0IHN1cHBseSBhbiB1cGxvYWRjYXJlIHdpZGdldC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lkZ2V0Lm9uVXBsb2FkQ29tcGxldGUoKGluZm8pID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmVtaXQoWyckdXBsb2FkY2FyZScsICd1cGxvYWQnXS5qb2luKCcuJyksIGluZm8pO1xuICAgICAgICAgICAgICAgIHdpZGdldC52YWx1ZShudWxsKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCB0aGlzIHBsdWdpbiB0byB0aGUgQ2hhdCBjbGFzc2VzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZXNwYWNlOiAndXBsb2FkY2FyZScsXG4gICAgICAgIGV4dGVuZHM6IHtcbiAgICAgICAgICAgIENoYXQ6IGV4dGVuc2lvbixcbiAgICAgICAgICAgIEdsb2JhbENoYXQ6IGV4dGVuc2lvblxuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=
