export class Project {
  constructor(
    public projectId?: number,
    public title?: string,
    public description?: string,
    public study?: number,
    public category?: number,
    public createdOn?: Date,
    public clientId?: number,
  ) {}

  public getData() {
    return {
      projectId : this.projectId,
      title : this.title,
      description : this.description,
      study : this.study,
      category : this.category,
      createdOn : this.createdOn,
      clientId : this.clientId
    };
  }
}
