// pueden ser reasignadas:
var hello = "Hello";
// no pueden ser reasignadas:
let world = "World";
const helloWorld = "Hello World!";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction()