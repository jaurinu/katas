const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const phoneNumber = (number) => {
let firstArray = number.slice(0,3).join('');
let secondtArray = number.slice(3,6).join('');
let thirdArray = number.slice(6,9).join('');

let newphoneNumber = "(" + firstArray + ") " + secondtArray + "-" + thirdArray;
return newphoneNumber;
};
console.log(phoneNumber(number));
