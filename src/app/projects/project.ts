export class Project {
  constructor(
    private projectId ? : Number,
    private title ? : String,
    private description ? : String,
    private study ? : String,
    private category ? : String,
    private clientId ? : Number,
  ){}

  getData() {
    return {
      projectId : this.projectId,
      title : this.title,
      description : this.description,
      study : this.study,
      category : this.category,
      clientId : this.clientId
    }
  }
}
