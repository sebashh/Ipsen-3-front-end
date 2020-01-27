export class Student {
  constructor(
    public password_user: AbstractControl
    public id? : number,
    public email? : String,
    public password? : String,
    public lastLogin? : String,
    public study? : String
  ){}

}
