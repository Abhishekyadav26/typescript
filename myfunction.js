"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toLocaleUpperCase();
}
getUpper("abhi");
function signUpUser(name, email, password, isPaid) {
}
signUpUser("Abhishek", "acds@gmail.com", "hbfhB", true);
var LOGINuSER = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid === void 0) {
        isPaid = false;
    }
};
LOGINuSER("h", "a");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spiderman", "ironman"];
// const heroes = [1,3]
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errormessage) {
    console.log(errormessage);
}
function hanndleError(errormessage) {
    // console.log(errormessage); 
    throw new Error(errormessage);
}
