const data = [{ name: "Kunal", enrol: 121 },
{ name: "Parth", enroll: 6 },
{ name: "Falgun", enroll: 70 }];

function getData() {
    setTimeout(() => {
        let output="";
        data.forEach((data) => {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML =output;
    }, 2000)
}

function createData(newData, callback){
    setTimeout(()=>{
        data.push(newData);
        callback();
    }, 5000)
}

// getData();
createData({name: "Mahip" , enroll: 56}, getData)