interface Person {
    firstName : string,
    lastName : string,
    age: number
}

function introduce (person: Person ) : void  {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`)
}

introduce({firstName : "Kunal", lastName: 'Shah', age: 22});