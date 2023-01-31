const getListStudents = [];
export default function getStudentIdsSum(accumulator, currentValue) {
  return accumulator + currentValue;
}
const students_id = getListStudents.reduce(getStudentIdsSum);
