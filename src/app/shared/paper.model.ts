export class Paper {

  constructor(
    public projectId ? : Number,
    public title ? : String,
    public author ? : String,
    public uploadedBy ? :  Number,
    public uploadDate ? : String,
    public paperFile ? : String,
  ){}


  public getData(){
    return {
      projectId : this.projectId,
      title : this.title,
      author : this.author,
      uploadDate: this.uploadDate,
      paperFile : this.paperFile,
      uploadedBy : this.uploadedBy
    }
  }
}
