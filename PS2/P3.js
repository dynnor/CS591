//Dynnor Shebshaievitz

/*
Write a function that prints the cube value of its input (ie f(x)=x^3).
Next, write a single line of code to call the
function on each value of the array [1,2,3,4,5,6,7].
 */



function cube(x) {
    console.log(x * x * x);

}
//let xx = cube(3);
//onsole.log(xx);

const arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(cube(arr));

console.log(arr.filter(cube));