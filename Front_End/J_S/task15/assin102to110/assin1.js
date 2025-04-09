document.addEventListener("DOMContentLoaded", function () {
  let userInput = prompt("Print Number From – To", "Example: 5-20");

  if (userInput) {
    let match = userInput.match(/^(\d+)-(\d+)$/);

    if (match) {
      let num1 = parseInt(match[1]);
      let num2 = parseInt(match[2]);

      let start = Math.min(num1, num2);
      let end = Math.max(num1, num2);

      let output = "";
      for (let i = start; i <= end; i++) {
        output += `${i}<br>`;
      }
      document.body.innerHTML = output;
    } else {
      alert("enter your number: 5-20");
    }
  }
});
