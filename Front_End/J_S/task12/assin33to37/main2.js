let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
  console.log(num1 + " " + "Is The Same Value As" + " " + str);
}
if (num1 == str && typeof num1 != typeof str) {
  console.log( num1 + " " + "Is The Same Value As" + " " + str +" "+ "But Not The Same Type");
}

if(typeof(str) == typeof(str2) && str != str2 ){
    console.log(str + " "+"Is The Same Type As" + str2 +" "+"But Not The Same Value");
}

