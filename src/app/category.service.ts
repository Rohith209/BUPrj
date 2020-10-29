import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private database : AngularFireDatabase) { }

  getCategories() {
    return this.database.list('/categories');
  }
}
