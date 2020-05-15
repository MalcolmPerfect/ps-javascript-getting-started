let price = 20.99,
    discounted = false;


price += 1;
let price2 = 1.1 + 1.3;

let name = 'Bojo';
let message = `Hello ${name}`;

message = message.toLowerCase();
message = message.substring(5);

if (1 === 2){
    showMessage('true');
}

let stringNumber = "123";
console.log(stringNumber + 5); //prints 1235
console.log((+stringNumber) + 5); //prints 128

let someFloat = 123.456
let fixedNum1Dp = someFloat.toFixed(1); //this returns a string!
console.log(typeof(fixedNum1Dp)); //see the string
console.log(typeof(+fixedNum1Dp)); //see the string


for(let i = 0; i < 5; i++) {
//    console.log(i);
}

let count = 1;
while(count < 10) {
    console.log(count);
    count *= 2;
}

//function expression
let fun1 = function loggingFunction (message){
    //console.log('here\'s a message')
    console.log(message);
    // note the name is only for debugging purposes; you cannot use the name
}

fun1('hello');

//showMessage(person.lastName);

changePercentOff(5);


let mySymbol = Symbol();

let person = {
    firstName: 'John',
    lastName: 'Adams',
    age: 22,
    showInfo: function(){
        showMessage(this.firstName);
    },
    [mySymbol]: 'secretInformation'
}

// showMessage(person.age);
// person.age = 33;
// showMessage(person.age);
// person['age'] = 44;
// showMessage(person.age);
person.showInfo();

let seeReviewButton = document.getElementById('see-review');
seeReviewButton.addEventListener('click', function() {

    const review = document.getElementById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        seeReviewButton.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        seeReviewButton.textContent = 'SEE REVIEW';
    }
    
})

//arrays
const values = ['a','b','c'];
console.log(values);
console.log(Array.isArray(values)); //typeof array is actually an object
console.log(values[2]);
values[0] = 'aaa';
console.log(values[0]);
values.push('123'); //push and unshift to add to end/back of array
console.log(values);
console.log(values.pop()); //pop and shift to remove from end/start
console.log(values.shift());
console.log(values);
//use splice for delete/insert items, slice for copying items

const values2 = ['a', 'b', 'c', 'd', 'e'];
console.log(values2);
const newValues = values2.slice(1, 4);
console.log(newValues);

values2.splice(2,1);
console.log(values2);
values2.splice(2,0,'hello');
console.log(values2);

//searching 
let filterFunc = function(item){
    console.log(`checking item ${item}`);
    return item > 'b';
}

let valsGTB = values2.filter(filterFunc); //note can also just create the function in the arg itself
console.log(valsGTB);

//forEach, find, filter all take a function

let containers = document.getElementsByClassName('container');
console.log(containers);

