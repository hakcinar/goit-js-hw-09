const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  input.value = formData.email || '';
  textarea.value = formData.message || '';
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Please fill in both the email and message fields.');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData = { email: '', message: '' };
});
