const keys = document.querySelectorAll(".key");

const handleKeydown = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

const handleTransitionend = (e) => {
  // pick one css property name to prevent multiple events from firing
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

window.addEventListener("keydown", handleKeydown);

// transitionend refers to css transition event
keys.forEach((key) => {
  key.addEventListener("transitionend", handleTransitionend);
});
