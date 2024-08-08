// console.log("Hello")

const message = 'hello',
    name = 'tisha',
    age = '21';

console.log(message)
console.log(name)
console.log(age)

//loops

let mess1 = 'do while';
console.log(mess1);

let i = 0;
do {
    console.log( i );
    i++;
} while (i <= 10);
//for each loop

let mess = 'for-each loop';
console.log(mess);
for (let i = 0; i < 15; i++) {
    console.log(i);
}


//conditions
//if else

const time = 14;
if(time>12){
    console.log("good morning");
} else{
    console.log("bbyeee");
}

//arrow functions
let sum = (a,b) => a+b;
console.log(sum(1,2));



//switch case

let a = 2+2;
 switch (a){
     case 3:
         console.log('too small');
         break;
     case 4:
         console.log('excataly');
         break;
     case 5:
         console.log('too big');
         break;
     default:
         console.log(' i dont have such values');
 }

//2 user input

// const userInput = ("enter number");
//
// const number1 = parseFloat(userInput);
//
// if(!isNaN(number1)) {
//     if (number1 > 0) {
//         console.log("Number is positive");
//     } else if (number1 < 0) {
//         console.log("Number is negative");
//     } else {
//         console.log("Number is Zero");
//     }
// }

// conditions
//
// let age = ('age?', 18);
//
// let message = (age < 3) ? 'Hi, baby!' :
//     (age < 18) ? 'Hello!' :
//         (age < 100) ? 'Greetings!' :
//             'What an unusual age!';
//
// console.log( message );


//user input
//
// let tisha = prompt("what is your age? ",18);
// let welcome = (tisha<18) ?
//     () => console.log("hello") :
//     () => console.log("greetings!");
// welcome();

