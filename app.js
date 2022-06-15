class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
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
    if (typeof num === "number") {
      this._numberOfStudents = num;
    } else {
      console.log("Invalid input: numberOfStudents must be a Number");
    }
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level}.`
    );
  }
  static pickSubstituteTeachers(substituteTeachers) {
    return this.substituteTeachers[
      Math.floor(Math.random() * substituteTeachers.length)
    ];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}
