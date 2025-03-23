const itsMe = () => `Iam A creat Function`;

console.log(itsMe());

const urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
