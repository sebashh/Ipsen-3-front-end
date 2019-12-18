import { Component } from '@angular/core';
import { RestApiService } from './src/server/server/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IPSEN3-Front-End';

  constructor(
    public restApi: RestApiService
  ) { }
  
  // EXAMPLE
  // HelloWorld() {
  //   this.restApi.getTest().subscribe((data)=>{
  //     console.log(data);
  //   })
  // }
}

