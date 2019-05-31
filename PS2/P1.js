//Dynnor Shebshaievitz
//Used Code from Slides



function* fibs () {

    let [val1, val2, result] = [0, 1, 0]
        while (result <500) {
            result = val1+val2
            val1 = val2
            val2 = result
            yield result

        }
    }
//Get a few fibs

for (fib of fibs()) {
    //check if the fib number is even
    //if it is it will print it out

    if(fib%2 == 0 ){
        console.log(`even: ${fib}`)
    }

   // console.log(fib)
}
