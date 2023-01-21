/*
Написати функцію, яка приймає масив чисел
і повертає true, якщо в цьому масиві є два однакових числа поспіль
Якщо не має - повертає false, якщо масив порожній - теж повертає false
// [1,2,3,4,5]->false
// [1,2,2,3,2]->true
 */

function checkTwoIdenticalNumbers(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return "false";
    }

    return arr.some((val, i, arr) => arr[i] === arr[i - 1]);

    // debugger
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === arr[i-1]) {
    //         return true;
    //     }
    // }
    // return false;

    // return arr.find((elem, index, arr)=>{
    //     if(arr[index]===arr[index-1]) {
    //         return true;
    //     }
    //     return false;
    // })
}

console.log(checkTwoIdenticalNumbers([]));
console.log(checkTwoIdenticalNumbers([1, 2, 2, 3, 2]));
console.log(checkTwoIdenticalNumbers([1, 0, 2, 3, 3]));
console.log(checkTwoIdenticalNumbers([3, 3]));
console.log(checkTwoIdenticalNumbers([1, 2, 3, 5, 4, 5]));
console.log(checkTwoIdenticalNumbers([1]));
