import {Component, Input, OnInit} from '@angular/core';
import {Paper} from "../../shared/paper.model";
import {RestApiService} from "../../src/server/server/server";
import {Project} from "../../shared/project.model";

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  @Input()
  project: Project;

  papers: Paper[] = [];

  uploading: boolean = false;
  hasContent: boolean = false;

  constructor(private apiService: RestApiService) { }

  ngOnInit() {
    this.apiService.getPapersOfProject(this.project.projectId).subscribe((data) => {
      this.papers = data;
      this.hasContent = this.papers.length == 0;
    });


  }

  toggleUpload() {
    this.uploading = !this.uploading;
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  showPaper(paperFile: String) {
    this.apiService.downloadPDF(paperFile).subscribe(res => {
      let pdf = new Blob([res], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(pdf);
      window.open(fileURL, '_blank');
    });
  }


}