const inputs = document.querySelectorAll('.controls input');

function handleChange() {
  console.log(this.value);
}

inputs.forEach((input) => {
  input.addEventListener('change', handleChange);
});
