class Student {
    constructor(Name, GradeLevel, Courses = []) {
        this.Name = Name;
        this.GradeLevel = GradeLevel
        this.Courses = Courses
    }
}

const Student1 = new Student(
    "Kunal Shah",
    12,
    ["Maths", "Science", "History"]
)
const Student2 = new Student(
    "Stuti Patel", 
    12,
    ["Maths", "Geography"]
) 

const Student3 = new Student(
    "Dhiraj Patel", 
    12,
    ["Maths", "English", "Geography"]
) 

var studentArray = [Student1 , Student2, Student3];

function addCourse(courseName) {
    Student1.Courses.push(courseName);
}

function removeCourse(courseName) {
    if (Student1.Courses.includes(courseName)) {
        // let index = Student1.Courses.indexOf(courseName)
        // console.log(index);
        // Student.Courses.splics(index,1);
        var newArray = Student1.Courses.filter(cName => cName != courseName);
        return newArray;
    }
    else (
        console.log("Student is not enrolled in that course")
    )

}

// function courseStudents (arr , courseName){
//     var courseStudents = [];
//     for (let i=0; i<arr.length; i++){
//         for(let j=0; j<arr[i].Courses.length; j++){
//             if(arr[i].Courses[j] == courseName){
//                 courseStudents.push(arr[i])
//                 break;
//             }
//         }
//     }
//     return courseStudents;
// }

function courseStudents (arr , courseName){
    var courseStudents = arr.filter(x => x.Courses.includes(courseName));
    
    return courseStudents;
}



addCourse("Biology");
console.log(Student1);

var courseArray = removeCourse("Maths");
console.log(courseArray);

var a = courseStudents(studentArray, "Science");
console.log(a);