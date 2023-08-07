var array1 = [1,2,3,5,6,8];
var array2 = [2,11,5,4,6];


function ArrayIntersection(arr1, arr2){

    var IntersectionArray = []; 
    for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i] == arr2[j]){
            IntersectionArray.push(arr1[i]);
        }
    }
}return IntersectionArray;
}

var InterArray = ArrayIntersection(array1, array2);
console.log(array1);
console.log(array2);

console.log(InterArray);

// const filteredArray = array1.filter(value => array2.includes(value));
// console.log(filteredArray);