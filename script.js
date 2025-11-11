const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

if (userId) {
  fetch('https://script.google.com/macros/s/AKfycbx_upT3JIXFr_Xqth5DUT1AhL7zVOb3FXYQR6SmO4ekTr-L_Y_fsb0sVUedZmxKufBX/exec' + userId)
    .then(response => console.log('Tracked:', userId))
    .catch(error => console.error('Error:', error));
}
