- You will need to have Node installed to start this environment. If you are not sure if you have Node installed run `node -v` in your terminal. If you do not see a version number output, install Node before moving on.
- Install light-server locally and save it to your development environment by running `npm install lite-server --save-dev` in your terminal.
- Run `npm run start` in your terminal to start the server.
- Your browser will open at `localhost:3000`.

## getting started
### installations
 - vs code
 - node.js (includes npm)

### installing project
 - open in vs code
 - at terminal: npm install
 - at terminal: npm run start

## notes

### script location
  - scripts affecting the project can be in the **head** section of the html, e.g. jquery that **don't rely on the webpage**
  - scripts that affect the page itself cannot be in the head, need to be at the end, in the body, after html has loaded


### constants and variables
 - let for variable, const for k/w
 - can comma-separate let if multiple variables
 - don't use var any more. 

### types and operators
 - numbers: standard stuff
 - operator precedence, bodmas, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 - watch out for precision floating point issues
 - strings. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 - conversion to string, toString() method
 - conversion from string to number, Number.parseFloat('123')
 - also can convert to number using + character e.g. +"123"
 - undefined. When haven't initialised a value

### program flow
 - falsy: false, 0, "", '', null, undefined, Nan
 - truthy: everything other than falsy
 - === vs ==. == does type conversion, usually don't want this. e.g. 1 == "1"

### functions
 - https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function
 - if don't supply parameter, value is undefined. Same if don't return a value to caller
 - scope. functions have access to variables outside of scope
 - arguments allows to iterate through all arguments passed into function
 - IIFE function. no name and defined inside parenthesis, wiht a closing ()
 - closures; return a function which contains its own environment; its own variables (see psJavaSCriptFunctions)

### objects
 - json notation. Can set using either . or []
 - functions have to use the this keyword to access obj properties
 - objects passed to functions by reference
 - standard built-in objects https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 
### arrays
 - not actually a native type. Zero-based
 - initialise with [] or Array.of
 - push/pop add/remove from end, unshift/shift at start
 - slice to take a copied slice, splice to remove and/or insert items
 - searching/looping: filter, find, forEach all take a function

