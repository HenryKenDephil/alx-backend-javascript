export default function updateStudentGradeByCity (getListStudents, city, newGrades){
    let student = getListStudents.filter(() => getListStudents.location === city);
    let newGrades = new Map();
    obj = [];
    newGrades.set(obj, {studentId: '31', grade: '78'});
    if (student.has('newGrades')){
        return student.get(newGrades);
    }
    return N/A;

}
updateStudentGradeByCity();