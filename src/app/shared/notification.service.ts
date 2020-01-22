import {EventEmitter, Injectable, Output} from '@angular/core';
import {RestApiService} from "../src/server/server/server";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  @Output() public fire: EventEmitter<any> = new EventEmitter<any>();
  constructor(private apiService: RestApiService) {
    var counter = 60;
    var interval = setInterval(() => {
      counter--;
      if(counter < 0 ){
        this.getNewNotifications()
        counter = 60;
      };
    }, 1000);
  };


  getNewNotifications(){
    this.apiService.getNewNotifications().subscribe(item => this.fire.emit(item));
  }
}
