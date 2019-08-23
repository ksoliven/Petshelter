import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pets : any = [];
  filter : any = [];
  q : string ="";

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    let observable = this._http.getPets();
    observable.subscribe(data => {
      this.pets = data;
      this.filter = data;
    });
  }

  deleteOnClick(_id) {
    let observable = this._http.deletePet(_id);
    observable.subscribe(data => {
      if (data["status"] === 200) {
        this._router.navigate(["/"]);
      }
    this.ngOnInit();
    })
  }
  
  s(e){
    let temp =[];
    for(let pet of this.pets){
      if(pet['name'].toLowerCase().includes(e.toLowerCase())){
        temp.push(pet);
      } 
    }
    this.filter = temp;
  }
}
