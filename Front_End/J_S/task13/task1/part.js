function getDetails(zName, zAge, zCountry) {
  function namePattern(name) {
    let parts = name.split(" ");
    return `${parts[0]} ${parts[1][0].toUpperCase()}.`;
  }

  function ageWithMessage(ageMessage) {
    let age = ageMessage.match(/\d+/)[0];
    return `Your age is ${age}`;
  }

  function countryTwoLetters(country) {
    return `You live in ${country.slice(0, 2).toUpperCase()}`;
  }

  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(
      zCountry
    )}`;
  }

  return fullDetails(); //return name , age , country
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

console.log(getDetails("Ahmed ali", "32 Years Old", "Syria"));
