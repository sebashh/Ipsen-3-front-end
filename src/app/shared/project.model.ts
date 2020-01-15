export class Project {
  constructor(
    public projectId?: number,
    public title?: string,
    public summary?: string,
    public study?: string,
    public category?: string,
    public createdOn?: Date,
    public clientId?: number,
  ) {}

  public getData() {
    return {
      projectId : this.projectId,
      title : this.title,
      summary : this.summary,
      study : this.study,
      category : this.category,
      createdOn : this.createdOn,
      clientId : this.clientId
    };
  }
}
