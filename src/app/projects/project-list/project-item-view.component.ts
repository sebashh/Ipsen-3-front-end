import {Component, Input, OnInit, Output} from '@angular/core';
import {Paper} from '../../shared/Models/paper.model';
import {RestApiService} from "../../shared/Services/api-service";

@Component({
  selector: 'app-project-item-view',
  templateUrl: './project-item-view.component.html',
  styleUrls: ['./project-item-view.component.css']
})

export class ProjectItemViewComponent implements OnInit {
  paper: Paper[] = [];
  @Input() searchValue: string;
  title: string;
  author: string;
  pdfLocation: string;
  paperId: number;

  pageOfItems: Array<any>;

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.restApi.getPapers().subscribe((item) => {
      this.paper = item;
      console.log(item);

      this.title = this.paper[0].title,
        this.author = this.paper[0].author,
        this.pdfLocation = this.paper[0].paperFile,
        this.paperId = this.paper[2].id;
    });

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
