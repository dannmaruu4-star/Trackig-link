const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

if (userId) {
  fetch('https://script.google.com/macros/s/AKfycbxuHfPmfHvhkEkBswSwDFJMGTLxacXNLMf003U0aYJo1m3YjQo3BYm5EYX6mtjg85Qbkw/exec' + userId)
    .then(response => console.log('Tracked:', userId))
    .catch(error => console.error('Error:', error));
}
