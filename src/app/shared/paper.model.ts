
export class Paper {

  constructor(
    public projectId ? : number,
    public title ? : string,
    public author ? : string,
    public uploadedBy ? : number,
    public uploadDate ? : Date,
    public paperFile ? : string,
    public id ? : number,
  ){}


  public getPaperData() {
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
