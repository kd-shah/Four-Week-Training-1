const generate = (x : string) : void =>{
    x = (<HTMLInputElement>document.getElementById("input")).value;
    // document.getElementById("display")?.innerHTML = "Hello"+x;
    console.log(`Hello, Good Morning. Welcome ${x}`);
}
// export{};

// function generateText (x:string) :string {
//     return `"Hello"  ${x}`;
// }
// console.log(generateText("Kunal"));