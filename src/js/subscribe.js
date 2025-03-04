document.addEventListener('DOMContentLoaded', function () {
  const subForm = document.querySelector('form.input');

  subForm.addEventListener('submit', function (e) {
    const subInput = document.getElementById('subInput');
    e.preventDefault();
    console.log(subInput.value);
    subInput.value = '';
  });
});
