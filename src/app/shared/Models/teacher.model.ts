import {AbstractControl} from "@angular/forms";

export class Teacher {
  constructor(
    public id? : number,
    public email? : String,
    public password? : String,
    public lastLogin? : String,
    public study? : String
  ){}

}
