import throttle from 'lodash.throttle';

const FORM_STATE_STORAGE_KEY = 'feedback-form-state';

function getFormState() {
  const formState = localStorage.getItem(FORM_STATE_STORAGE_KEY);
  try {
    return formState ? JSON.parse(formState) : {};
  } catch (e) {
    return {};
  }
}

function initForm() {
  Object.entries(getFormState())
    .forEach(([name, value]) => {
      formElement.elements[name].value = value;
    });
}

function onFormInput(event) {
  const formState = getFormState();

  formState[event.target.name] = event.target.value;
  localStorage.setItem(FORM_STATE_STORAGE_KEY, JSON.stringify(formState));
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log("Form submission...");
  console.log(getFormState());

  event.target.reset();
  localStorage.removeItem(FORM_STATE_STORAGE_KEY);
}

const formElement = document.querySelector('form.feedback-form');

if (formElement) {
  initForm();

  formElement.addEventListener("input", throttle(onFormInput, 500));
  formElement.addEventListener("submit", onFormSubmit);
}

