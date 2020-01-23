import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/Services/api-service';


@Component({
  selector: 'app-admin-list-accounts',
  templateUrl: './admin-list-accounts.component.html',
  styleUrls: ['./admin-list-accounts.component.css']
})


export class AdminListAccountsComponent{
  constructor(public restApi: RestApiService){}

  AllStudents = [];
  AllTeachers = [];
  AllClients = [];
  Students = true;
  Teachers = false;
  Clients = false;

  ngOnInit(){
    this.getAllStudents();
    this.getAllTeachers();
    this.getAllClients();
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
    this.Students = true;
    this.Teachers = false;
    this.Clients = false;
    this.resetButton();
    this.changeButton('Students');
  }

  showTeachers(){
    this.Students = false;
    this.Teachers = true;
    this.Clients = false;
    this.resetButton();
    this.changeButton('Teachers');
  }

  showClients(){
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
}
