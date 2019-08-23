import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pet : any = {};
  errors : any = {};

  constructor(
    private _http : HttpService,
    private _route : ActivatedRoute,
    private _router :Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params._id);
      let observable = this._http.getOnePet(params._id);
      observable.subscribe(data => {
        this.pet = data;
      });
    });
  }

  updatePet(){
    let observable = this._http.updatePet(this.pet._id, this.pet);
    observable.subscribe(data => {
      console.log(data);
      if(data['errors']) {
        this.errors = data['errors'];
      } else{
        this._router.navigate(['/']);
      }
    });
  }
}

//   deleteOnClick(_id) {
//     let observable = this._http.deletePet(_id);
//     observable.subscribe(data => {
//       if (data["status"] === 200) {
//         this._router.navigate(["/"]);
//       }
//     this.ngOnInit(); 
//     });
//   }
// }
