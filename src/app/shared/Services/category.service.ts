import { Injectable } from '@angular/core';
import {Category} from "../Models/category.model";
import {RestApiService} from "./api-service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[];

  public init(){
    this.apiService.getCategories().subscribe(item =>{
      console.log(item as Category[]);
      this.categories = item as Category[];
    })
  }

  constructor(private apiService: RestApiService) {
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
