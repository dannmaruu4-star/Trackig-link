const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

if (userId) {
  fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?id=' + userId)
    .then(response => console.log('Tracked:', userId))
    .catch(error => console.error('Error:', error));
}
