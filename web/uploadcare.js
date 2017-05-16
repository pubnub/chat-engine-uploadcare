(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {

    const namespace = require('../package.json')['open-chat-framework']['namespace'];
    window.OpenChatFramework.plugin[namespace] = require('../plugin.js');

})();

},{"../package.json":2,"../plugin.js":3}],2:[function(require,module,exports){
module.exports={
  "name": "ocf-uploadcare",
  "version": "0.0.1",
  "main": "./plugin.js",
  "open-chat-framework": {
    "namespace": "uploadcare"
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

                this.parent.send(['$' + namespace, 'upload'].join('.'), info);
                widget.value(null);

            });

        }
    }

    // add this plugin to the Chat classes
    return {
        namespace,
        extends: {
            Chat: extension,
            GlobalChat: extension
        }
    }

}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni43LjAvbGliL25vZGVfbW9kdWxlcy9vY2YtcGx1Z2luL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wL3dyYXAuanMiLCJwYWNrYWdlLmpzb24iLCJwbHVnaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgbmFtZXNwYWNlID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylbJ29wZW4tY2hhdC1mcmFtZXdvcmsnXVsnbmFtZXNwYWNlJ107XG4gICAgd2luZG93Lk9wZW5DaGF0RnJhbWV3b3JrLnBsdWdpbltuYW1lc3BhY2VdID0gcmVxdWlyZSgnLi4vcGx1Z2luLmpzJyk7XG5cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibmFtZVwiOiBcIm9jZi11cGxvYWRjYXJlXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwibWFpblwiOiBcIi4vcGx1Z2luLmpzXCIsXG4gIFwib3Blbi1jaGF0LWZyYW1ld29ya1wiOiB7XG4gICAgXCJuYW1lc3BhY2VcIjogXCJ1cGxvYWRjYXJlXCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoY29uZmlnKSA9PiB7XG4gICAgICAgIFxuICAgIC8vIHRoZXNlIGFyZSBuZXcgbWV0aG9kcyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIGV4dGVuZGVkIGNsYXNzXG4gICAgY2xhc3MgZXh0ZW5zaW9uIHtcbiAgICAgICAgYmluZCh3aWRnZXQpIHtcblxuICAgICAgICAgICAgaWYoIXdpZGdldCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ011c3Qgc3VwcGx5IGFuIHVwbG9hZGNhcmUgd2lkZ2V0LicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aWRnZXQub25VcGxvYWRDb21wbGV0ZSgoaW5mbykgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc2VuZChbJyQnICsgbmFtZXNwYWNlLCAndXBsb2FkJ10uam9pbignLicpLCBpbmZvKTtcbiAgICAgICAgICAgICAgICB3aWRnZXQudmFsdWUobnVsbCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgdGhpcyBwbHVnaW4gdG8gdGhlIENoYXQgY2xhc3Nlc1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZXh0ZW5kczoge1xuICAgICAgICAgICAgQ2hhdDogZXh0ZW5zaW9uLFxuICAgICAgICAgICAgR2xvYmFsQ2hhdDogZXh0ZW5zaW9uXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
