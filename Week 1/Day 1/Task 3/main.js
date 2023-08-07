function multiply(){
    num1 = document.getElementById("first").value
    num2 = document.getElementById("second").value
    total = num1/num2;
    console.log(total);
    document.getElementById("result").innerHTML = num1*num2

}