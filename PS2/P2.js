//Dynnor Shebshaievitz

/*
Write a generator that is initialized with a sentence and
that emits each word of the sentence in turn.
Use the generator to print the words, one per line, of
the string “All I know is something like a bird within her sang”.
 */

function* sens (){
    sentence = "All I know is something like a bird within her sang";
    senArray = sentence.split(' ');
    //console.log(senArray);
    yield* senArray;
    
}

for (x of sens()){
    console.log(x);
}

