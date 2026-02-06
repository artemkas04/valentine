document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  if (!noBtn || !yesBtn) {
    console.error("Кнопки не найдены");
    return;
  }

  noBtn.style.position = "absolute";

  function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  }

  noBtn.addEventListener("mouseenter", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

  yesBtn.addEventListener("click", function () {
    window.location.href = "yes.html";
  });
});
