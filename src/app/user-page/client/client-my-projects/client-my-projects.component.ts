import { Component, OnInit } from '@angular/core';

export interface Tile {
  text: string;
}

@Component({
  selector: 'app-client-my-projects',
  templateUrl: './client-my-projects.component.html',
  styleUrls: ['./client-my-projects.component.css']
})

export class ClientMyProjectsComponent implements OnInit {

  
  constructor() { }

  tiles: Tile[] = [];
  ngOnInit() {
    this.filInTheTiles(3);
  }

  addProject(){
    this.tiles.push({text: "New Project Added"})
  }
  filInTheTiles(amount){
    const replacement = "This is a Project";
    for(var i = 0;i < amount; i++){
      this.tiles.push({text: replacement});
    }
    console.log(this.tiles);
  }
  
  // tiles: Tile[] = [
  //   {text: 'One'},
  //   {text: 'Two'},
  //   {text: 'Three'},
  //   {text: 'Four'},
  //   {text: 'Five'},
  //   {text: 'Six'},
  //   {text: 'Seven'},
  //   {text: 'Eight'},
  //   {text: 'Nine'},
  //   {text: 'Ten'},
  //   {text: 'Eleven'},
  //   {text: 'Twelve'},
  //   {text: 'Thirteen'},
  //   {text: 'Fourteen'},
  //   {text: 'Fifteen'},
  //   {text: 'Sixteen'},
  // ];

}
