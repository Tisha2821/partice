//map method
function square (x)
{
    return x * x;
}
const numbers = [1,2,3,4,5];
const squarednumbers = numbers.map(square);

console.log(squarednumbers);

function add(y)
{
    return y + y;
}

const num = [2,3];
const addnum = num.map(add);
console.log(addnum);

//add of 2 numbers

const num1 = [5,10];
const sum = num1.map(num2 => num2 + 2);
console.log(sum);

//find method

const users = [
    {  id:1 , name:"abc" , age:'21'},
    {  id:2 , name:"pqr" , age: '15'},
    {  id:3 , name:"xyz" , age: '15'},

];

function findUsersByName(name) {
    return users.find(user => user.name === name);
}

function findUsersByAge(age){
    return users.find(user1 => user1.age === age);
}

const user = findUsersByName('xyz');
const user1 = findUsersByAge('21');

console.log(user);
console.log(user1);


//filter method

const numbers1 = [1,2,3,4,5];
const evenNumbers = numbers1.filter(function(num){
    return num % 2 == 0;
});

console.log(evenNumbers);

const words = ["apple","kiwi","orange","banana"];

const longWords = words.filter(function(word){
    return word.length > 5;
});

console.log(longWords);

const ages1 = [10,14,18,21,22,25];

const adults = ages1.filter(ages2 => ages2 <= 18 );

console.log(adults)



