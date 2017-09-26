// In this example we are going to create a chat client
// With the uploadcare plugin to provide for uploading files

// These are our Uploadcare variables from the Uploadcare setup process
// https://uploadcare.com/documentation/widget/#install
UPLOADCARE_LOCALE = "en";
UPLOADCARE_TABS = "file url facebook gdrive dropbox instagram evernote flickr skydrive";
UPLOADCARE_PUBLIC_KEY = "19126fa911640117d6d6";

// get some references to our UI elements
const input = document.getElementById('input');
const output = document.getElementById('output');
const widget = uploadcare.Widget('[role=uploadcare-uploader]');

// get some references to functions
let send = function () {};
let submit = function () {};

// create an instance of chat-engine
const CE = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    globalChannel: 'uploadcare-example'
});

// connect to the network
CE.connect('George Costanza');

// when the connection is ready, do some stuff
CE.on('$.ready', () => {

    // * * * * *  start plugin specific code  * * * * *

    // attach the unread-messages plugin to the global channel
    CE.global.plugin(ChatEngineCore.plugin['chat-engine-uploadcare']());

    // bind the uploadcare plugin to it's UI element
    CE.global.uploadcare.bind(widget);

    // when an upload event is emitted on the global channel add an image to the chat log
    CE.global.on('$uploadcare.upload', (payload) => {

        output.append($('<p><strong>'
            + payload.sender.uuid + ':</strong><img src="'
            + payload.data.cdnUrl + '"/></p>'));

    });

    // * * * * *  end plugin specific code  * * * * *

    // when a message event is emitted on the global channel add text to the chat log
    CE.global.on('message', (payload) => {

        $(output).append($('<p><strong>' + payload.sender.uuid + ':</strong> ' + payload.data.text + '</p>'));

    });

    // use the input box value as message payload then clear it
    send = function () {

        CE.global.emit('message', {
            text: input.value
        });

        input.value = '';

        return false;

    };

    // hook up the enter key for maximum usability
    submit = function (e) {

        if (e.keyCode === 13) {
            send();
        }
    };

});
