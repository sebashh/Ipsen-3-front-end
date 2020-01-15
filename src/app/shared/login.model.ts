export class LoginModel {
  email: string;
  password: string;
  constructor(
    email: string,
    password: string
  ) {
    this.email = email;
    this.password = password;
  }

  public getData() {
    return {
      email : this.email,
      password : this.password
    };
  }
}
