import { Injectable, Output, EventEmitter } from '@angular/core';
import {Category} from "../Models/category.model";
import {RestApiService} from "./api-service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  refresh(){
    this.getAllCategories();
  }
  categories: Category[];

  @Output() event= new EventEmitter<Category[]>();

  public init(){
    this.getAllCategories();
  }

  constructor(private apiService: RestApiService) {
  }

  getAllCategories(){
    this.apiService.getCategories().subscribe(item =>{
      this.categories = item as Category[];
      this.event.emit(this.categories);
    })
  }

  getCategoryId(name: string): any{
    this.categories.forEach(item =>{
      if(item.name == name){
        return item.id;
      }
    });
    return null;
  }
}
