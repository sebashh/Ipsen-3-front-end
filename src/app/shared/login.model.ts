export class Project {
  constructor(
    public email ? : String,
    public password ? : String,
  ){}

  public getData() {
    return {
      email : this.email,
      password : this.password
    }
  }
}
