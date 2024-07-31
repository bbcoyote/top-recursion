// we can do a while loop that initializes i starting at 0 and while num is less than i increase it.
// also have a result variable initialized at 0 outside of do while loop.
// and an array [0, 1]
// while num > i we want to add the last 2 elements of the array together to get a fibonacci number.
// To do this with code we can do array[i - 1] + array [i] = result then push result into array.
// step 1 increase i to 1, run middle if statement, makes fibArray [0];
// step 2 increase i to 2, run last if statement, result add and assign 1 = 1, push result(1) into array makes fibArray [0, 1]
// step 3 increase i to 3, run first if statment, result = fibArray[0] + fibArray[1] code always adds the last 2 elements
// of fibArray to get result and pushes it into fibArray.
// after i = num log fibArray.
console.log("running file")

function fibs(num) {
    let i = 0;
    let result = 0;
    let fibArr = []
    do {
        i++;
        if (fibArr.length >= 2) {
            result = fibArr[i - 3] + fibArr[i - 2];
            fibArr.push(result)
        }
        if (fibArr.length < 1) {
            fibArr.push(result)
        } else if (fibArr.length < 2) {
            result += 1;
            fibArr.push(result)
        }
    } while (i < num)
    console.log(fibArr)
}

fibs(8)

// Now to make fibs a recursive function.
// we need a base case,
// then we need a process to run untill the base case is met.
// if I give num 8 how do I get to 13 


function fibRecursive(num) {

}