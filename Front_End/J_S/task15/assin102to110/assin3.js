document.addEventListener("DOMContentLoaded", function () {
  let counterDiv = document.createElement("div");
  counterDiv.className = "counter";
  counterDiv.textContent = "10";
  document.body.appendChild(counterDiv);

  let count = parseInt(counterDiv.textContent);

  let countdown = setInterval(function () {
    if (count > 0) {
      count--;
      counterDiv.textContent = count;
    } else {
      clearInterval(countdown);
    }
  }, 1000);
});
