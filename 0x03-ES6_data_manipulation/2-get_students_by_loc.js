export default function getStudentsByLocation(getListStudents) {
    return getListStudents.filter((students) => students.location === city);
}