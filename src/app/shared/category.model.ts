export class Category {
  constructor(
    // tslint:disable-next-line:variable-name
    public name?: string

  ) {}

  public getData() {
    return {
      name: this.name
    };
  }
}
