const gdbBtn = document.querySelector("#goodbyeBtn");
const msgHdr = document.querySelector("#messageHdr");

gdbBtn.addEventListener("click", function () {
  msgHdr.innerHTML = "Goodbye World";
});
