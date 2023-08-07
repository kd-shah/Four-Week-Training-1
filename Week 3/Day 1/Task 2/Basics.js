const a = prompt("Enter Your Name");
// console.log(a);
if (a == null || a == ""){
    const newName = prompt("Enter your name"); 
    if (newName != null && newName != "") { 
        document.getElementById("intro").innerHTML = "Hello " + newName;
    }
} else {
    document.getElementById("intro").innerHTML = "Hello " + a;
}