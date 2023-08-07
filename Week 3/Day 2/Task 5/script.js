"use strict";
function getLength() {
    var item = document.getElementById("text").value;
    var arrayItem = item.split(",");
    if (arrayItem.length == 1) {
        console.log(arrayItem[0].length);
    }
    else {
        console.log(arrayItem.length);
    }
    for (let i = 0; i < arrayItem.length; i++) {
        console.log(typeof (arrayItem[i]));
    }
    item = "";
    console.log("Item is" + item);
}
