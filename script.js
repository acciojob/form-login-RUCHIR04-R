// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way
  getFormvalue();
});

function getFormvalue() {
  const firstName = document.querySelector('input[name="fname"]').value.trim();
  const lastName = document.querySelector('input[name="lname"]').value.trim();

  if (firstName && lastName) {
    alert(`${firstName} ${lastName}`);
  } else {
    alert('Please enter both first name and last name.');
  }
}
