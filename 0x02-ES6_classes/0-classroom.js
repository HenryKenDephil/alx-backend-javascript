export default class ClassRoom {
  maxStudentSize(Number) {
    this.Number = Number;
  }
}

const room = new ClassRoom(10);
console.log(room.maxStudentSize);
