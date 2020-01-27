import {Component, Input, OnInit} from '@angular/core';
import {Paper} from '../../shared/Models/paper.model';
import {Project} from '../../shared/Models/project.model';
import {ProjectService} from '../../shared/Services/project.service';
import {RestApiService} from '../../shared/Services/api-service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project: Project;
  papers: Paper[] = [];

  uploading = false;
  hasContent = false;
  private following: boolean;

  constructor(private apiService: RestApiService, private projectService: ProjectService) {
    this.project = this.projectService.getCurrentProject();
    if (this.project != null) { this.setCurrentProject(this.project); }
  }

  ngOnInit() {
  }

  setCurrentProject(project: Project) {
    this.project = project;
    this.apiService.userFollowingProject(project.projectId).subscribe(item => {
      this.following = item; });
    this.getPapers();
  }

  getPapers() {
    this.apiService.getPapersOfProject(this.project.projectId).subscribe((data) => {
      this.papers = data;
      this.hasContent = this.papers.length == 0;
    });
  }



  toggleUpload() {
    this.uploading = !this.uploading;
  }

  formatDate(date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  showPaper(paperFile: String) {
    this.apiService.downloadPDF(paperFile).subscribe(res => {
      const pdf = new Blob([res], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(pdf);
      window.open(fileURL, '_blank');
    });
  }

  unFollowProject() {
    this.apiService.unFollowProject(this.project.projectId);
    this.changeFollowState(false);
  }

  followProject() {
    this.apiService.followProject(this.project.projectId);
    this.changeFollowState(true);
  }

  private changeFollowState(state: boolean) {
    this.following = state;
  }
}
