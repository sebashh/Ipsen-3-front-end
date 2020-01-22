import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../project.model";
import {NotificationService} from "../../notification.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() showing: boolean = false;
  projects: Project[] = [];

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notificationService.fire.subscribe(item =>{
      this.projects = item;
    })
  }
}
