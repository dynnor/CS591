//Dynnor Shebshaievitz


/*
This function should
Determine the operator (+, *, -, or /) embedded in the string
Return a function to implement the input operator that returns the result
 */
var Integer;
function evaluate(x){
    str= x;

    if(str[1] === "+"){
        var x = Number(str[0]);
        var y = Number(str[2]);
        return x + y;
    }
    if(str[1] === "%"){
        var x = Number(str[0]);
        var y = Number(str[2]);
        return x % y;
    }
    if(str[1] === "/"){
        var x = Number(str[0]);
        var y = Number(str[2]);
        return x / y;
    }
    if(str[1] === "*"){
        var x = Number(str[0]);
        var y = Number(str[2]);
        return x * y;
    }
    if(str[1] === "-"){
        var x = Number(str[0]);
        var y = Number(str[2]);
        return x - y;
    }

}



//test cases to see if the function works
const exp1 ='4+2';
const exp2 = '5*7';
const exp3 = '6-1';
const exp4 = '9/2';
const exp5 = '8%3';



console.log(evaluate(exp1));

console.log(evaluate(exp2));

console.log(evaluate(exp3));

console.log(evaluate(exp4));

console.log(evaluate(exp5));

