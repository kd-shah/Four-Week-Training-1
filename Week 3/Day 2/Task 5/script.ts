function getLength() {
    
    var item = (<HTMLInputElement>document.getElementById("text")).value;
    var arrayItem : string[] = item.split(",");
    if(arrayItem.length == 1){
        console.log(arrayItem[0].length)
    }
    else{
        console.log(arrayItem.length)
    }
    for(let i=0; i<arrayItem.length; i++){
        console.log(typeof(arrayItem[i]))
    }
    item="";
    console.log("Item is" + item);
}
