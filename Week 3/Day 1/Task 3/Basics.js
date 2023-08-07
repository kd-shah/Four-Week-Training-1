function sum(){
    var a = parseInt(document.getElementById("first").value);
    var b = parseInt(document.getElementById("second").value);
    var sum = a+b;
    
    document.getElementById("sumdisplay").value = sum
    alert("Add Button Clicked");
}

