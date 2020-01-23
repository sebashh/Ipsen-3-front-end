export class Interest {
  constructor(
    // tslint:disable-next-line:variable-name
    public email?: string,
    // tslint:disable-next-line:variable-name
    public category_id?: number

  ) {}

  public getData() {
    return {
      email: this.email,
      category_id : this.category_id
    };
  }
}
