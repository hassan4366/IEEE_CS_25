document.addEventListener("DOMContentLoaded", function () {
  let inputField = document.querySelector("input[name='dollar']");
  let resultDiv = document.querySelector(".result");
  let exchangeRate = 15.6;

  function updateConversion() {
    let dollarAmount = parseFloat(inputField.value);

    if (isNaN(dollarAmount) || dollarAmount < 0) {
      resultDiv.textContent = `0 USD Dollar = 0 Egyptian Pound`;
      return;
    }

    let egpAmount = (dollarAmount * exchangeRate).toFixed(2);
    resultDiv.textContent = `${dollarAmount} USD Dollar = ${egpAmount} Egyptian Pound`;
  }

  inputField.addEventListener("input", updateConversion);
  inputField.addEventListener("paste", () => setTimeout(updateConversion, 0));
});
