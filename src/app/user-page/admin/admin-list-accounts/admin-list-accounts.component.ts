import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/Services/api-service';


@Component({
  selector: 'app-admin-list-accounts',
  templateUrl: './admin-list-accounts.component.html',
  styleUrls: ['./admin-list-accounts.component.css']
})


export class AdminListAccountsComponent{
  testing = [
    {name: 'test1', id: 1, date: "20-01-20"},
    {name: 'test2', id: 2, date: "20-01-20"},
    {name: 'test3', id: 3, date: "20-01-20"},
    {name: 'test4', id: 4, date: "20-01-20"}
  ];

  constructor(public restApi: RestApiService){}

  AllStudents = [];
  Students = true;
  Teachers = false;
  Clients = false;

  ngOnInit(){
    this.getAllStudents();
    this.AllStudents = this.AllStudents.sort((a,b)=> a.lastLogin - b.lastLogin)
  }

  getAllStudents(){
    this.restApi.getAllStudents().subscribe((data)=>{
      for(var i = 0; i < data.length; i++){
        console.log(data);
        this.AllStudents = data;
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
}
