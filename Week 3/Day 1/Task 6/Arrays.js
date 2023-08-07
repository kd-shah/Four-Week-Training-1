var array1 = [1,2,4,1,6,2,5,1,10];
function getUniqueNumbers(arr){
    const uniqueSet = new Set(arr);

    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}

const array2 = getUniqueNumbers(array1);
console.log(array2);