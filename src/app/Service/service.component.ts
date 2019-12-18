import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})
export class ServiceComponent {
  constructor(private http: HttpClient) {
    this.http = http;
  }  configUrl = 'localhost:8080';
  getConfig() {
    (this.http.get(this.configUrl + '/user/person/naam').subscribe((naam) => {
      console.log(naam.toString());
    }));
    }
    // return this.http.get(this.configUrl);

}
