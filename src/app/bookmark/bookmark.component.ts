import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  constructor() {

  }
  Titel = 'Hoi'
  Author = 'Floris'
  Catagory = 'IT';
  Likes = 50;
  Date = '19-05-1999';
  private cellRendererFramework: any;

  columnDefs = [
    {field: 'Titel' },
    {field: 'Author' },
    {field: 'Catagory'},
    {field: 'Likes'},
    {field: 'Date'},
  ];

  rowData = [
    { Titel: this.Titel, Author: this.Author, Catagory: this.Catagory, Likes: this.Likes, Date: this.Date},


  ];
  ngOnInit() {
  }

}
