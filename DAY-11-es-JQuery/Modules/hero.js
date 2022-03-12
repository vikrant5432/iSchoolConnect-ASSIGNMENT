// import person from "./person.js";
import person from "./person.js";
class Hero extends person {
  firstName = "Vikrant";
  lastName = "kumar";
  _secret = "my secret mission";
  static version = 1001;

  constructor(fname, lname, ncity) {
    super(ncity);
    this.firstName = fname;
    this.lastName = lname;
  }

  fullName() {
    return this.firstName + " " + this.lastName + " " + this.city;
  }

  get secret() {
    return this._secret;
  }
  set secret(nsecret) {
    this._secret = nsecret;
  }
}

export default Hero;
