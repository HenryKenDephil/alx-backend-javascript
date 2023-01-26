class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // using setters

  set name(name) {
    if (typeof name === 'string') {
      this._name = _name;
    } else {
      throw new Error('name must be a string');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = _length;
    } else { throw new Error('length must be a number'); }
  }

  set students(students) {
    if (typeof students === 'array of strings') {
      this._students = _students;
    } else { throw new Error('students must be an array of strings'); }
  }

  get name() { return this.name; }

  get length() { return this.length; }

  get students() { return this.students; }
}

HolbertonCourse();
