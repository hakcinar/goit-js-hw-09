const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((value, name) => {
    data[name] = value;
  });
  console.log(data);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
input.addEventListener('input', onInputChange);
textarea.addEventListener('input', onInputChange);
function onInputChange(event) {
  const savedData = localStorage.getItem('feedback-form-state');
  const data = savedData ? JSON.parse(savedData) : {};
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const data = JSON.parse(savedData);
  input.value = data.email || '';
  textarea.value = data.message || '';
}
