const btn = document.querySelector(".btn");
const text = document.querySelector(".input");

btn.addEventListener("click", () => {
  text.select();
  document.execCommand("copy");
  btn.innerHTML = "Copied";
  setTimeout(() => {
    btn.innerHTML = "Copy";
  }, 3000);
});
