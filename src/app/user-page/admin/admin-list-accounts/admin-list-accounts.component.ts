import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-list-accounts',
  templateUrl: './admin-list-accounts.component.html',
  styleUrls: ['./admin-list-accounts.component.css']
})
export class AdminListAccountsComponent{
  Students = true;
  Teachers = false;
  Clients = false;
  
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
}
