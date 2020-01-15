export class Paper {

  constructor(
    public projectId ? : Number,
    public title ? : String,
    public author ? : String,
    public uploadedBy ? :  Number,
    public uploadDate ? : Date,
    public paperFile ? : String,
    public id ? : number,
  ){}


  public getPaperData(){
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
