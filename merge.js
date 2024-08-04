// split array in half until only 1 element remains then sort and merge
// repeat until all elements are sorted.
// QUESTIONS
// How to we split the elements?
// how do we sort the elements?
// how do we merge the elements?
// if array length is greater than one, split in half
// when only one element sort 
// for each list create an index pointer compare array of index to array of index, which ever is lower copy to new array.
// move the index that was copied over and also move the index of the new array.

let array1 = [10, 5, 3, 6, 2, 1, 7, 9, 8, 0]

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, mid);
    let rightHalf = array.slice(mid);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result
}

console.log(mergeSort(array1))