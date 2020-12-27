const second = document.querySelector('.second-hand');
const minute = document.querySelector('.min-hand');
const hour = document.querySelector('.hour-hand');

const handleSeconds = () => {
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  if (seconds === 59) {
    second.style.transition = 'none';
  }
  second.style.transform = `rotate(${90 + 6 * seconds}deg)`;
  minute.style.transform = `rotate(${90 + 6 * minutes + 0.1 * seconds}deg)`;
  hour.style.transform = `rotate(${90 + 30 * hours + 0.5 * minutes}deg)`;
};

const interval = setInterval(handleSeconds, 1000);
