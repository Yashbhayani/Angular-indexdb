import { Injectable } from '@angular/core';
import { async } from 'rxjs';
declare var db: any;
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public storagename = 'codetodo';
  constructor() {}

  add(keyname: any, value: any) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storagename], 'readwrite')
          .objectStore(this.storagename)
          .put(value, keyname);

        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log('Success');
            resolve('Success');
          } else {
            console.log('Prasad has been added to your database.');
            resolve(false);
          }
        };
      }
    });
  }

  get(keyname: any) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storagename], 'readwrite')
          .objectStore(this.storagename)
          .get(keyname);

        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log('Success');
            resolve('Success');
          } else {
            console.log('Prasad has been added to your database.');
            resolve(false);
          }
        };
      }
    });
  }

  delete(keyname: any) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storagename], 'readwrite')
          .objectStore(this.storagename)
          .delete(keyname);

        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log('Success');
            resolve('Success');
          } else {
            console.log('Prasad has been added to your database.');
            resolve(false);
          }
        };
      }
    });
  }
}
