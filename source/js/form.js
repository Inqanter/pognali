const selectButton = document.querySelector('.land__button--empty');
const counters = document.querySelectorAll('.counter__input');
const counterButtons = document.querySelectorAll('.counter__button');

function counterButtonsClickHandler(e) {
  e.preventDefault();
  const container = this.closest('.counter__field');
  let inputField = container.querySelector('.counter__input');
  let inputValue = parseInt(inputField.value);

  if (inputField.value.length < 3 && inputValue >= 0) {
    if (this.classList.contains('counter__button--less') && inputValue > 0) {
      inputValue -= 1;
    } else if (this.classList.contains('counter__button--more')) {
      inputValue += 1;
    }
    inputField.value = inputValue;
  } else {
    inputField.value = parseInt(0);
  }
}

function counterValidateHandler() {
  let inputValue = this.value;
  if (inputValue == '' || inputValue.length > 2) {
    this.value = '';
  }
}

function selectButtonClickHandler(e) {
  e.preventDefault();
  this.classList.toggle('land__button--active');
}

selectButton.addEventListener('click', selectButtonClickHandler);

counterButtons.forEach((button) => {
  button.addEventListener('click', counterButtonsClickHandler);
});

counters.forEach((counter) => {
  counter.addEventListener('input', counterValidateHandler);
});
