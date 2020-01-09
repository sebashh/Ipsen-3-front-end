export class Project {
  constructor(
    public projectId ? : Number,
    public title ? : String,
    public description ? : String,
    public study ? : String,
    public category ? : String,
    public createdOn ? : Date,
    public clientId ? : Number,
  ){}

  public getData() {
    return {
      projectId : this.projectId,
      title : this.title,
      description : this.description,
      study : this.study,
      category : this.category,
      createdOn : this.createdOn,
      clientId : this.clientId
    }
  }
}
