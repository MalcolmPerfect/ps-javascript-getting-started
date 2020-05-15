//closure example
// a closure has its own environment. Witness the one below; val is maintained within each
// instance of the function.
function setupCounter(val){
    return function counter () {
        return val++;
    }
}

let counter1 = setupCounter(0);
console.log(counter1());
console.log(counter1());
console.log(counter1());
let counter2 = setupCounter(10);
console.log(counter2());

function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(1,4));

//convert the above to an arrow function
let sumArrow = (num1, num2) => num1 + num2;
console.log(sumArrow(1,4));

//arrow functions have no access to 'this'
//in the following example we have an object message which has both a regular function and an arrow function
let message = {
    name: 'John',
    regularFunction: function() {
        console.log(this);
        console.log('Hello ' + this.name);        
    },
    arrowFunction: () => console.log('Hi ' + this.name)
}
message.regularFunction();
message.arrowFunction();
console.log(this);

//function context
// window 
function sayHi() {
    console.log('Hi');
    console.log(this);
}
sayHi();

//use constructor
let greeting1 = new sayHi();


let greeting = {}; //empty object
greeting.sayHi = function(){
    console.log('Hi');
    console.log(this);
}
greeting.sayHi();


//call method
let person1 = {name: 'John', age: 22};
let person2 = {name: 'Mary', age: 26};

let sayHi2 = function(){
    console.log('Hi ' + this.name);
};
sayHi2();
sayHi2.call(); //this is the same as just calling the function
sayHi2.call(person1);
sayHi2.call(person2);

//apply method
function introduction(name, profession){
    console.log('My name is ' + name + ' and i am a ' + profession);
}
introduction('John', 'student');
//pass undefinted if not specifying object
introduction.apply(undefined, ['Mary','Lawyer']); //apply accepts an array of arguments
introduction.call(undefined, 'James', 'artist'); //call accepts list of args

//bind
let person3 = {
    name: 'Mary',
    getName: function() {
        return this.name;
    }
};

let person4 = {
    name: 'John'
};

console.log(person3.getName());
// console.log(person4.getName()); //error
let getNameCopy = person3.getName.bind(person4);
console.log(getNameCopy());

console.log(person3.getName.call(person4));


// rest parameters indicated by ...
//must appear at the end after regular params
let sayHiRest = function greet(message, ...names){
    console.log(message + ' everyone');
    //foreach calls a function once for each element in an array
    names.forEach(name => console.log('Hi ' + name));
};

sayHiRest('Hello', 'Mary', 'Jack');

//spread sort of does the oppositve
function greetWithSpread(p1, p2) {
    console.log('Hello ' + p1 + ' and ' + p2);
};

let names = ['jock', 'jim'];
greetWithSpread(...names);

