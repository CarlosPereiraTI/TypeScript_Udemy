"use strict";
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log("Clicked!");
});
const userName = "Charlie";
// console.log(userName);
console.log(`Hello ${userName}`);
console.log("Disconnecing...");