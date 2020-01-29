import {AbstractControl} from "@angular/forms";

export class Student {
  constructor(
    public study: number,
    public categories: number[],
    // tslint:disable-next-line:variable-name
    public email_user: AbstractControl,
    // tslint:disable-next-line:variable-name
    public password_user: AbstractControl
  ){}

  public getData() {
    return {
      study: this.study,
      categories: this.categories,
      email_user: this.email_user,
      password_user: this.password_user
    };
  }
}