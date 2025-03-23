function checkStatus(a, b, c) {
  if (c === true) {
    console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
  } else {
    console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`);
  }
}
// Needed Output
checkStatus("Osama", 38, true);
