// In this example we are going to create a chat client
// With the uploadcare plugin to provide for uploading files

// These are our Uploadcare variables from the Uploadcare setup process
// https://uploadcare.com/documentation/widget/#install
UPLOADCARE_LOCALE = "en";
UPLOADCARE_TABS = "file url facebook gdrive dropbox instagram evernote flickr skydrive";
UPLOADCARE_PUBLIC_KEY = "19126fa911640117d6d6";

// get some references to our UI elements
const input = $('#input');
const widget = uploadcare.Widget('[role=uploadcare-uploader]');

// get some references to functions
let send = function () {};
let submit = function () {};

// create an instance of chat-engine
const ChatEngine = ChatEngineCore.create({
    publishKey: 'pub-c-c2a407d1-2771-4d22-9063-bd538c8d720f',
    subscribeKey: 'sub-c-72ef270e-c41a-11e7-8c2e-7612aca27832'
});

// connect to the network
ChatEngine.connect('George-Costanza', {}, 'auth-key');

// when the connection is ready, do some stuff
ChatEngine.on('$.ready', () => {

    // * * * * *  start plugin specific code  * * * * *

    // attach the unread-messages plugin to the global channel
    ChatEngine.global.plugin(ChatEngineCore.plugin['chat-engine-uploadcare']());

    // bind the uploadcare plugin to it's UI element
    ChatEngine.global.uploadcare.bind(widget);

    // when an upload event is emitted on the global channel add an image to the chat log
    ChatEngine.global.on('$uploadcare.upload', (payload) => {

        $('#output').append($('<p><strong>'
            + payload.sender.uuid + ':</strong><img src="'
            + payload.data.cdnUrl + '"/></p>'));

    });

    // * * * * *  end plugin specific code  * * * * *

    // when a message event is emitted on the global channel add text to the chat log
    ChatEngine.global.on('message', (payload) => {

        $('#output').append($('<p><strong>' + payload.sender.uuid + ':</strong> ' + payload.data.text + '</p>'));

    });

    // use the input box value as message payload then clear it
    send = function () {

        ChatEngine.global.emit('message', {
            text: input.val()
        });

        input.val('');

        return false;

    };

    // hook up the enter key for maximum usability
    submit = function (e) {

        if (e.keyCode === 13) {
            send();
        }
    };

});
