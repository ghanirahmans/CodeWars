//day2
//https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript

function getAge(inputString) {
    let words = inputString.split(' ');
    let age = parseInt(words[0]);
    return age;
}

console.log(getAge("4 years old"))