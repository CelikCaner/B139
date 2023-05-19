import showAlert, { showConfirm } from '../js/message(script-66).js';
document.getElementById('btnAlert').addEventListener('click', () => {
  showAlert('Hello Module');
});
document.getElementById('btnConfirm').addEventListener('click', () => {
  showConfirm('Are you sure to update?');
});
