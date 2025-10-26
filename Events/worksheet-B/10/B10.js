// TODO: Select the form with id 'userForm'.
const userForm = document.querySelector('#userForm');

if (userForm) {
  // TODO: Attach a 'submit' listener to the form.
  userForm.addEventListener('submit', (event) => {
    // TODO: Inside the handler, prevent default form submission. (Hint: event.preventDefault())
    event.preventDefault();

    // TODO: Read values via event.target.elements and log them.
    const email = event.target.elements.email.value;
    const nick = event.target.elements.nick.value;

    if (email && nick) {
      console.log({ email, nick });
    } else {
      console.log('Email or Nickname is empty.');
    }
  });
} else {
  console.log("Form with id 'userForm' not found.");
}
