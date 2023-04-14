import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'indexdb';

  constructor(public localStorageip:LocalStorageService){}

  add(){
    let t = (<HTMLInputElement>document.getElementById("iop")).value;
    this.localStorageip.add("Yash", t).then(res=>{
      if(res){
        console.log("Success")
      }
    })
  }
  get(){}
  delete(){}
}
