const form = document.querySelector('.form-right-box');
const inputs = form.querySelectorAll('input, textarea, select');

form.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const isFormValid = form.checkValidity();

    if (isFormValid) {
      form.submit();
      form.reset();

      alert('Form was successfully submit!');
    } else {
      alert('Please, fill all information!');
    }
  }
});

const textarea = document.querySelector('.form-right-textarea');
const symbols = document.querySelector('.message-symbols');

const options = document.querySelector('.custom-select');
const selectItem = document.querySelectorAll('.select-item');
const selectInput = document.querySelector('.select-input');
const selectBtn = document.querySelector('.form-icon');

textarea.addEventListener('input', () => {
  const currentLength = textarea.value.length;
  const maxLength = textarea.maxLength;

  symbols.textContent = `${currentLength}/${maxLength}`;
});

function toggle() {
  if (options.style.display === 'block') {
    options.style.display = 'none';
    textarea.style.opacity = 1;
    symbols.style.opacity = 1;
  } else {
    options.style.display = 'block';
    textarea.style.opacity = 0;
    symbols.style.opacity = 0;
  }
}

selectBtn.addEventListener('click', toggle);
selectInput.addEventListener('click', toggle);

selectItem.forEach(item => {
  item.addEventListener('click', () => {
    selectInput.value = item.textContent;
    options.style.display = 'none';
    textarea.style.opacity = 1;
    symbols.style.opacity = 1;
  });
});
