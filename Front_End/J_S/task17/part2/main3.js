let phone = "+(995)-123 (4567)";
let regex = /^\+\(\d{3}\)-\d{3} \(\d{4}\)$/;
console.log(regex.test(phone));
