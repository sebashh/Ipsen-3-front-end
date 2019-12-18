import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IPSEN3-Front-End';

  private apiUrl ='http://localhost:8080/ipsen3projects/test';
  data: any = {};
  message;

  constructor (private http: Http) {
  }

  getData(){
    return this.http.get(this.apiUrl).pipe(map(result => this.data));
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
      this.message = JSON.stringify(data);
      })
  }

}
