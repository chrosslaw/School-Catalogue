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
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return `Substitute Teacher: ${substituteTeachers[randomNumber]}`;
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
class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, "middle", numberOfStudents);
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

//Primary School Test Cases
const thomasJefferson = new PrimarySchool(
  "Thomas Jefferson",
  354,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
thomasJefferson.quickFacts();
console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);

//High School Test Case
const isaacNewton = new HighSchool("Isaac Newton", 260, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(isaacNewton.sportsTeams);
