const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const phoneNumber = (number) => {
let newPhone = "(" + [number.slice(0,3).join('')] + ") " + [number.slice(3,6).join('')] + "-" + [number.slice(6,9).join('')]
return newPhone;
};
phoneNumber(number);
