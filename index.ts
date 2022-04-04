// Implicit Types
let helloworld = "Hello , World!";

// helloworld = 5;
//Explicit types
let firstName: string = "John";
let age: number = 30;

// Tuple
type stringAndNumber = [string, number];

let x: stringAndNumber = ["Hello", 59];

// Enums
enum Continents {
  North_America, // 0
  South_America, // 1
  Africa,
  Asia,
  Europe,
  Antartica,
  Australia,
}
var region = Continents.Africa; // 2

//Common types
// Boolean
// Number
//String
// Array
// Tuple
// Enum
// Unknown
// Any
// Void
// Null and Undefined

// Interface
interface User {
  name: string;
  id: number;
  array:stringAndNumber
}
const user: User = { name: "Carlos", id: 0,array:["hola",67] };

// Composing types -> Union 
type WindowStates = 'open' | 'closed' | 'minimized';
type LockState = 'locked' | "unlocked"
type oodNumberUnderTen = 1 | 3 | 5 | 7 | 9;
const windowStates:WindowStates = "closed"

const getLenght = (param:string | string[]) => {
    return param.length
}

getLenght('test') // 4
getLenght(['test','test1']) // 2
