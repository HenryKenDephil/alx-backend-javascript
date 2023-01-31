// using map to set data in arrays
export default function getListStudentIds(arr) { 
  if (!Array.isArray(arr)) return [];
  return arr.map((arr) =>arr.id);
}