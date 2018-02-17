const socket = io();
//console.log(socket);

socket.on('connect', () => console.log("Connected to socket.io server"));

socket.on('message', (message) => {
    console.log(`New message received: ${message.text}`);

    // display message received from server on screen
    $(".messages").append(`<p>${message.text}</p>`);
});

// handle form submission
const $form = $("#message-form");
const $formInp = $form.find('input[name=message]');


$form.on('submit', (e) => {
   e.preventDefault();


   socket.emit('message', {
       text: $formInp.val()
   });

   // reset input
    $formInp.val('');

});