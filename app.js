class School {
  constructor(name, level) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = 0;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(num) {
    this._numberOfStudents = num;
  }
  quickFacts() {}
  pickSubstituteTeacher() {}
}
