//Dynnor Shebshaievitz

// Using built in functions to sort the String
//Problem 1

/*
Write a function that takes a string as its input and returns a new string that contains
all of the letters in the original string,
but in alphabetical order. Ignore punctuation and numbers.
Test your function using the string ‘supercalifragilisticexpialidocious’.
 */

function sortString(str){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
}

console.log(sortString("supercalifragilisticexpialidocious"));
