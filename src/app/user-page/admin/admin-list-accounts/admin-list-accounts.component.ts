import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/Services/api-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-list-accounts',
  templateUrl: './admin-list-accounts.component.html',
  styleUrls: ['./admin-list-accounts.component.css']
})


export class AdminListAccountsComponent{
  dialog: any;
  constructor(public restApi: RestApiService, public router: Router){}

  AllStudents = [];
  AllTeachers = [];
  AllClients = [];
  Students = true;
  Teachers = false;
  Clients = false;

  ngOnInit(){
    this.getAllStudents();
  }

  getAllStudents(){
    this.restApi.getAllStudents().subscribe((data)=>{
      for(var i = 0; i < data.length; i++){
        console.log(data);
        this.AllStudents = data;
      }
    })
  }

  getAllTeachers(){
    this.restApi.getAllTeachers().subscribe((data)=>{
      for(var i = 0; i < data.length; i++){
        console.log(data);
        this.AllTeachers = data;
      }
    })
  }

  getAllClients(){
    this.restApi.getAllClients().subscribe((data)=>{
      for(var i = 0; i < data.length; i++){
        console.log(data);
        this.AllClients = data;
      }
    })
  }
  
  showStudents(){
    this.getAllStudents();
    this.Students = true;
    this.Teachers = false;
    this.Clients = false;
    this.resetButton();
    this.changeButton('Students');
  }

  showTeachers(){
    this.getAllTeachers();
    this.Students = false;
    this.Teachers = true;
    this.Clients = false;
    this.resetButton();
    this.changeButton('Teachers');
  }

  showClients(){
    this.getAllClients();
    this.Students = false;
    this.Teachers = false;
    this.Clients = true;
    this.resetButton();
    this.changeButton('Clients');
  }

  changeButton(id:string){
    console.log(id);
    let x = document.getElementById(id);
    console.log(x.className);
    x.className+= ' active';
  }
  resetButton(){
    let x = document.getElementById('Students');
    let y = document.getElementById('Teachers');
    let z = document.getElementById('Clients');
    x.className = 'button';
    y.className = 'button';
    z.className = 'button';
  }

  logIndex(i: number){
    console.log(i);
  }

  delete(id: number){
    var result = confirm("Are you sure you want to delete *EMAIL_HERE*?");
    console.log(result);
    if(result){
      this.deleteUser(id);
    }
  }

  deleteUser(id: number){
    console.log("Deleting user ID: " + id);
    this.restApi.deleteUser(id).subscribe();
  }

  refreshPage(){
    this.getAllClients();
    this.getAllStudents();
    this.getAllTeachers();
    this.router.navigate(["/admin/accounts"]);
  }
  openDialogEdit(id: number) {
    console.log(id);
    alert(id);
    return this.dialog.open(AdminListAccountsComponent,  {
        data: {
          id: id
        }
      });
  }

}
