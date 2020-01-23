export class Study {
  constructor(
    public name?: string

  ) {}

  public getData() {
    return {
      name : this.name,
    };
  }
}
