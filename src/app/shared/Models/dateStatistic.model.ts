export class dateStatistic {

  constructor(
    public date ? :string,
    public amount ? : number,
  ){}


  public getData(){
    return {
      date : this.date,
      amount : this.amount,
    };
  }
}
{

}
