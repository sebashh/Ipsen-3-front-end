import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/Services/api-service';
import { Router } from '@angular/router';
import { Paper } from 'src/app/shared/Models/paper.model';

@Component({
  selector: 'app-admin-list-papers',
  templateUrl: './admin-list-papers.component.html',
  styleUrls: ['./admin-list-papers.component.css']
})
export class AdminListPapersComponent implements OnInit {

  constructor(public restApi: RestApiService,public router: Router) { }
  AllPapers = [];
  edit = false;
  divIndex;

  ngOnInit() {
    this.getAllPapers();
  }

  getAllPapers(){
    this.restApi.getPapers().subscribe((data)=>{
      for(var i = 0; i < data.length; i++){
        this.AllPapers = data;
      }
    })
  }

  delete(id: number, title: String){
    var result = confirm("Are you sure you want to delete "+title+"?");
    if(result){
      this.restApi.deletePaper(id).subscribe();;
      this.getAllPapers();
      this.router.navigate(["/admin/papers"]);
    }
  }

  editRow(id: number) {
    this.edit = true;
    this.divIndex = id;

  }

  updatePaper(paper: Paper) {
    this.restApi.updatePaper(paper).subscribe();

    this.cancel();
  }

  cancel() {
    this.edit = false;
    this.refreshPage();
  }

  refreshPage() {
    this.getAllPapers();
    this.router.navigate(["/admin/papers"]);
  }
}
