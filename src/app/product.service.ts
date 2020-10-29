import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { firebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private database: AngularFireDatabase) {}
  create(product) {
    return this.database.list('/products').push(product);
  }

  getAll(): firebaseListObservable<any[]>{
    return this.database.list('/products');
  }
  // get(productId) {
  //   return this.database.object('/products/' + productId);
  // }
  // update(productId, product) {
  //   return this.database.object('/products/' + productId).update(product);
  // }
  // delete(productId) {
  //   return this.database.object('/products/' + productId).remove();
  // }
}
