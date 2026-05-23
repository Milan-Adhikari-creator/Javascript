// const student = {
//     name: "Milan Adhikari",
//     marks: 94.4,
//     printMarks: function(){
//         console.log("marks=", this.marks);//student.marks
//     }
// };
const student = {
    attendance(){
        console.log("attendance must be 80%");//student.marks
    }
};
const student1 = {

    level:"Bachelor"
};
const student2 = {

    level:"Bachelor"
};
const student3 = {

    level:"Bachelor"
};
student1.__proto__=student;
student2.__proto__=student;
student3.__proto__=student;
