var array = ["abc", "pqr", "mno", "xyz", "abc", "pqr", "mno", "abc", "xyz", "hij"];

function countOccurences(arr) {
    const occurences = {}

    for (let i = 0; i < arr.length; i++) {

        const element = arr[i];

        if (occurences[element]) {
            occurences[element]++;
        }
        else {
            occurences[element] = 1;
        }

    }
    return occurences;
}
const result = countOccurences(array);
console.log(array);
console.log(result);

var str = "ABC DEFG";

var rev_str = Array.from(str).reverse().join("");

console.log(str);
console.log(rev_str);