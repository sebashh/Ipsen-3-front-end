export class Statistics {

  constructor(
    public userAmount ? : number,
    public studentAmount ? : number,
    public teacherAmount ? : number,
    public clientAmount ? : number,
    public projectAmount ? : number,
  ){}


  public getData(){
    return {
      userAmount : this.userAmount,
      studentAmount : this.studentAmount,
      teacherAmount : this.teacherAmount,
      clientAmount: this.clientAmount,
      projectAmount : this.projectAmount
    };
  }
}
