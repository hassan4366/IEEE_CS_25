const birthDate = new Date("2006-09-28T00:00:00");
const now = new Date();

const diffMs = now - birthDate;

const seconds = Math.floor(diffMs / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);

let years = now.getFullYear() - birthDate.getFullYear();
let months = now.getMonth() - birthDate.getMonth() + years * 12;

if (now.getDate() < birthDate.getDate()) {
  months -= 1;
}

if (
  now.getMonth() < birthDate.getMonth() ||
  (now.getMonth() === birthDate.getMonth() &&
    now.getDate() < birthDate.getDate())
) {
  years -= 1;
}

console.log(`"${seconds} Seconds"`);
console.log(`"${minutes} Minutes"`);
console.log(`"${hours} Hours"`);
console.log(`"${days} Days"`);
console.log(`"${months} Months"`);
console.log(`"${years} Years"`);
