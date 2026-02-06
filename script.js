document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  // защита от null — это не «вежливость», а здравый смысл
  if (!noBtn || !yesBtn) {
    console.error("Кнопки не найдены");
    return;
  }

  noBtn.style.position = "absolute";

  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = ${x}px;
    noBtn.style.top = ${y}px;
  });

  yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
  });
});
