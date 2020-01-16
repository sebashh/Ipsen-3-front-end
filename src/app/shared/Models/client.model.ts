import {AbstractControl} from "@angular/forms";

export class Client {
  constructor(
    // tslint:disable-next-line:variable-name
    public picture_company: string,
    // tslint:disable-next-line:variable-name
    public name_company: AbstractControl,
    // tslint:disable-next-line:variable-name
    public description_company: AbstractControl,
    // tslint:disable-next-line:variable-name
    public email_user: AbstractControl,
    // tslint:disable-next-line:variable-name
    public password_user: AbstractControl
  ){}

  public getData() {
    return {
      picture_company: this.picture_company,
      name_company: this.name_company,
      description_company: this.description_company,
      email_user: this.email_user,
      password_user: this.password_user
    };
  }
}
