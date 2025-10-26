// TODO: Select the button with id 'btn1'.

// TODO: Attach a 'click' event listener to the selected button.

// TODO: Inside the handler, log the event type.

const btn = document.getElementById('btn1');

if (btn) {
    btn.addEventListener('click', function (e) {
        console.log(e.type);
    });
} else {
    console.error("Button with id 'btn1' not found.");
}