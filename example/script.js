// In this example we are going to create a chat client
// With the uploadcare plugin to provide for uploading files
// const YOUR_PUBLISH_KEY = '';
// const YOUR_SUBSCRIBE_KEY = '';

const YOUR_PUBLISH_KEY = 'pub-c-01491c54-379f-4d4a-b20b-9a03c24447c7';
const YOUR_SUBSCRIBE_KEY = 'sub-c-eaf4a984-4356-11e8-91e7-8ad1b2d46395';

// just making sure you're paying attention
if (YOUR_PUBLISH_KEY === '' || YOUR_SUBSCRIBE_KEY === '') {
    alert('You forgot to enter your keys');
}

//    ________          __  ______            _
//   / ____/ /_  ____ _/ /_/ ____/___  ____ _(_)___  ___
//  / /   / __ \/ __ `/ __/ __/ / __ \/ __ `/ / __ \/ _ \
// / /___/ / / / /_/ / /_/ /___/ / / / /_/ / / / / /  __/
// \____/_/ /_/\__,_/\__/_____/_/ /_/\__, /_/_/ /_/\___/
//                                  /____/

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
    publishKey: YOUR_PUBLISH_KEY,
    subscribeKey: YOUR_SUBSCRIBE_KEY
});

// connect to the network
ChatEngine.connect('George-Costanza');

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
