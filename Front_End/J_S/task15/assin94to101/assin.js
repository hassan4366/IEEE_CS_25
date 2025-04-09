document.addEventListener("DOMContentLoaded", function () {
  const div = document.querySelector("div");

  const textNode = [...div.childNodes].find((node) => node.nodeType === 3);

  if (textNode) {
    console.log(textNode.textContent.trim());
  }
});
