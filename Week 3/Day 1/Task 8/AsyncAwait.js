const data = [{ name: "Kunal", enrol: 121 },
{ name: "Parth", enroll: 6 },
{ name: "Falgun", enroll: 70 }];

function getData() {
    setTimeout(() => {
        let output = "";
        data.forEach((data) => {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output;
    }, 2000)
}

function createData(newData) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.push(newData);
            let err = false;
            if (!err) {
                resolve()
            }
            else {
                reject("Error noticed");
            }
        }, 3000)
    })


}

async function start() {
    await createData({ name: "Mahip", enroll: 56 });
    getData()
}

start();