const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.style.left = "50%";
noBtn.style.top = "50%";
noBtn.style.transform = "translate(-50%, -50%)";

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = ${x}px;
  noBtn.style.top = ${y}px;
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
