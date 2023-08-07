function generate(){
    document.getElementById("para").innerHTML = document.getElementById("text").value;
}

function onChangeColor(){
    selected_color =document.getElementById("select").value;
    document.getElementById("para").style.color = selected_color;
} 