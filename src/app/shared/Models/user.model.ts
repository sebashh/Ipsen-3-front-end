

export class User {
  constructor(
    public iat: Date,
    public exp: Date,
    public role: string,
    public authToken: string
  ){}


  getAuthString(){
    return JSON.stringify(this.getData());
  }

  getData(){
    return{iat: this.iat,
      exp:  this.exp,
      role: this.role,
      authToken: this.authToken
    }
  }
}
