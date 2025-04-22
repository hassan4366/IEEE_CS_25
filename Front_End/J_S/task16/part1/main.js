const fontSelect = document.getElementById("font-select");
const colorSelect = document.getElementById("color-select");
const sizeSelect = document.getElementById("size-select");

window.onload = () => {
  const savedFont = localStorage.getItem("font") || "Open Sans";
  const savedColor = localStorage.getItem("color") || "#333";
  const savedSize = localStorage.getItem("size") || "16px";

  document.body.style.fontFamily = savedFont;
  document.body.style.color = savedColor;
  document.body.style.fontSize = savedSize;

  fontSelect.value = savedFont;
  colorSelect.value = savedColor;
  sizeSelect.value = savedSize;
};

fontSelect.addEventListener("change", () => {
  const font = fontSelect.value;
  document.body.style.fontFamily = font;
  localStorage.setItem("font", font);
});

colorSelect.addEventListener("change", () => {
  const color = colorSelect.value;
  document.body.style.color = color;
  localStorage.setItem("color", color);
});

sizeSelect.addEventListener("change", () => {
  const size = sizeSelect.value;
  document.body.style.fontSize = size;
  localStorage.setItem("size", size);
});
