// function getCount(str) {
// --------------------------- Vowel Count
//     const vowels = /[a,e,i,o,u]/gi;
//     const matchVowels = str.match(vowels);
//     if(matchVowels) {
//        return matchVowels.length;
//     } else {
//         return 0;
//     }
//   }
  
//   getCount('abracadabra');


// --------------------------- Disemvowel Trolls
// function disemvowel(str) {
//     const vowels = 'aeouiAEOUI';

//     const newStr = str.split('');

//     const newText = newStr.filter((char => vowels.indexOf(char) === -1)).join('');


// console.log(newText);
// return str;
// }

// disemvowel("This website is for losers LOL!");

// --------------------------- Square Every Digit
// function squareDigits(num) {
   
//     const digits = Array.from(String(num));

//     const squaredDigits = digits.map(elem => elem * elem);

//     const result = +squaredDigits.join('');
//     console.log(result);
//     return result;
// }
// squareDigits(231);

// --------------------------- Highest and Lowest

// function highAndLow(numbers){
    
//     const newArr = numbers.split(' ').map(Number);

//     console.log(newArr);
//     let min = newArr[0];
//     let max = newArr[0];

//     newArr.forEach(item => {
//         if(item > max) {
//             max = item;
//         } 
//         if(item < min) {
//             min = item;
//         }
//     })

//     const str = `${max} ${min}`;

//     console.log(str);
//   }

//   highAndLow("8 3 -5 42 -1");

// --------------------------- You're a square!

// function square(n){
  
//     return Math.sqrt(n) % 1 === 0;

// }

// --------------------------- Get the Middle Character!

// function getMiddle(str) {
//     const middleIndex = Math.floor(str.length / 2);

//     if (str.length % 2 === 0) {
//         return str.slice(middleIndex - 1, middleIndex + 1);
//     } else {
//         return str.charAt(middleIndex);
//     }
// }


// --------------------------- Descending Order

// function sortDigitsDescending(number) {
//     const newNumber = number;
//     console.log(parseInt(newNumber.toString().split('').sort((a, b) => b - a).join(''))); 
// }


// --------------------------- List Filtering

// function filter_list(l) {
//     return l.filter(filter => typeof filter === 'number');
// }


// --------------------------- Isograms

// function isIsogram(str) {
//     str = str.toLowerCase();

//     for (let i = 0; i < str.length; i++) {
//         if (str.indexOf(str[i]) !== i) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(isIsogram('sdwea'));

// --------------------------- Exes and Ohs

// function XO(str) {
//     const lowerStr = str.toLowerCase();
//     let countX = 0;
//     let countO = 0;
  
//     for (let i = 0; i < lowerStr.length; i++) {
//       if (lowerStr[i] === 'x') {
//         countX++;
//       } else if (lowerStr[i] === 'o') {
//         countO++;
//       }
//     }
  
//     return countX === countO;
//   }

// console.log(XO('xo'));


// --------------------------- toJadenCase

// function toJadenCase(str) {
//     return str.replace(/\b\w/g, char => char.toUpperCase());
//   }

// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));


// --------------------------- Mumbling

// function accum(s) {

// 	const newStr = s.split('');

//     const newArr =  newStr.map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');

//     console.log(newArr);
// }

// accum('qweee');

// --------------------------- Complementary DNA

// function dnaStrand(dna) {
//     const obj = {
//         'A': 'T',
//         'T': 'A',
//         'C': 'G',
//         'G': 'C'
//     };

//     return dna.split('').map(item => obj[item]).join('');
// }
// console.log(dnaStrand('TATTATATACCG'));



// ---------------------------  Sum of two lowest positive integers

// function sumTwoSmallestNumbers(numbers) {  
//    const newArr = numbers.sort((a, b) => {
//     return a - b;
//    });
//    return newArr[0] + newArr[1];
//   }
// console.log(  sumTwoSmallestNumbers([2, 2, 56, 3, 345, 1]));



// ---------------------------  Beginner Series #3 Sum of Numbers

// function getSum(a, b){
//     if(a > b) {
//       [a,b] = [b,a];
//     }
//     let num = 0;
  
//       for (let i = a; i <= b; i++) {
//           num += i;
//       }
  
//       return num;
//   }
// ---------------------------  String ends with?

// function solution(str, ending){
//     return str.endsWith(ending);
//   }


// ---------------------------  Credit Card Mask
// function maskify(str) {
//     return str.slice(0, -4).replace(/./g, '#') + str.slice(-4);
// }
// console.log(maskify('asdasdasdwqwdqdsadsd'));

// ---------------------------  Friend or Foe?

// function friend(friends){
//      const newArr = friends.filter(name => name.length == 4);
//      console.log(newArr);
//   }


// friend(["Ryan", "Kieran", "Mark"]);


// ---------------------------  Sum of odd numbers

// function rowSumOddNumbers(n) {
// 	return n*n*n;
// }
// console.log(rowSumOddNumbers(5));

// ---------------------------  Is this a triangle?

// function isTriangle(a, b, c) {
//     return a + b > c && a + c > b && b + c > a;
// }
// --------------------------- Binary Addition
// function addBinary(a, b) {
  
//     const sum = a + b;
  
//     return sum.toString(2);
// }

// --------------------------- Growth of a Population

// function nbYear(p0, percent, aug, p) {
//     let years = 0;

//     while (p0 < p) {
//         p0 += p0 * (percent / 100) + aug;
//         years++;
//     }

//     return years;
// }

// --------------------------- Two to One

// function longest(s1, s2) {
//     let combinedString = s1 + s2;
//     let uniqueChars = Array.from(combinedString)
//         .filter((value, index, self) => self.indexOf(value) === index)
//         .sort()
//         .join('');

//     return uniqueChars;
// }

// --------------------------- Regex validate PIN code

// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin);
// }

// --------------------------- ind the next perfect square!

// function findNextSquare(sq) {
//     const sqrt = Math.sqrt(sq);
//     if (Number.isInteger(sqrt)) {
//         const nextSquare = Math.pow(sqrt + 1, 2);
//         return nextSquare;
//     } else {
//         return -1;
//     }
// }


// --------------------------- Categorize New Member
// function categorizeMembers(data) {
//     return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');
// }
// const input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
// const output = categorizeMembers(input);

// console.log(output); 


// Printer Errors

// function printerError(s) {
//     return `${[...s.matchAll(/[n-z]/g)].length}/${s.length}`;
//   }

  // Ones and Zeros

//   function one() {
    // arr.reverse();
    // return arr.reduce((acc, el, index) => acc + el * 2 ** index, 0);
//   }
  
   //People in the Bus

//   var number = function (busStops) {
//     return busStops.reduce((acc, [add, remove]) => acc + add - remove, 0);
//   };