document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector("p");
  if (paragraph) {
    paragraph.remove();
  }

  const ourElement = document.querySelector(".our-element");
  if (ourElement) {
    const startDiv = document.createElement("div");
    startDiv.className = "start";
    startDiv.setAttribute("title", "Start Element");
    startDiv.setAttribute("data-value", "Start");
    startDiv.textContent = "Start";

    const endDiv = document.createElement("div");
    endDiv.className = "end";
    endDiv.setAttribute("title", "End Element");
    endDiv.setAttribute("data-value", "End");
    endDiv.textContent = "End";

    ourElement.before(startDiv);
    ourElement.after(endDiv);
  }
});
