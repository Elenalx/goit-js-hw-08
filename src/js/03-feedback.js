import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const key = 'feedback-form-state';


form.elements[0].setAttribute('required', '');
form.elements[1].setAttribute('required', '');

const storageData = localStorage.getItem(key);
if (storageData) {
  let storageDataObj = JSON.parse(storageData);

  form.email.value = storageDataObj.email;
  form.message.value = storageDataObj.message;
}

const storageDataEl = () => {
  localStorage.setItem(
    key,
    JSON.stringify({
      email: form.email.value,
      message: form.message.value,
    })
  );
};
form.addEventListener('input', throttle(storageDataEl, 500));

const onSubmit = ev => {
  ev.preventDefault();
  console.log(JSON.parse(localStorage.getItem(key)));
  localStorage.removeItem(key);
  form.reset();
};
form.addEventListener('submit', onSubmit);

