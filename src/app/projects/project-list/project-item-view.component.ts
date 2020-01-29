import {Component, Input, OnInit, Output} from '@angular/core';
import {Paper} from '../../shared/Models/paper.model';
import {RestApiService} from '../../shared/Services/api-service';

@Component({
  selector: 'app-project-item-view',
  templateUrl: './project-item-view.component.html',
  styleUrls: ['./project-item-view.component.css']
})

export class ProjectItemViewComponent implements OnInit {
  paper: Array<Paper>;

  @Input() searchValue: string;
  pageOfItems: Array<any>;

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.restApi.getPapers().subscribe((item) => {
      this.paper = item;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  showPaper(paperFile: String) {
    this.restApi.downloadPDF(paperFile).subscribe(res => {
      const pdf = new Blob([res], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(pdf);
      window.open(fileURL, '_blank');
    });
  }
}
