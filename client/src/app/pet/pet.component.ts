import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pet: any = {};
  errors : any;
  // liked = false;

  constructor(private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params._id);
      let observable = this._http.getOnePet(params._id);
      observable.subscribe(data => {
        this.pet = data;
      });
    });
  }

  //   this._route.params.subscribe((params: Params) => {
  //     console.log(params['id']);
  //     this.showOne(params['id']);
  //   });
  


  //   // this._route.params.subscribe(params => {
  //   //   console.log(params._id);
  //   //   let observable = this._http.getOnePet(params._id);
  //   //   observable.subscribe(data => {
  //   //     this.pet = data;
  //   //   });
  //   // })
  // }

  // showOne(id: String) {
  //   let observable = this._http.getOnePet(id);
  //   observable.subscribe(data => {
  //     if (data['message']) {
  //       console.log(data);
  //       this.errors = { message: "ID is not found. Please try with correct ID or create a new one." };
  //     }
  //     else {
  //       this.pet = data;
  //     }
  //   });
  // }
  

    adoptPet(petAdopt){
      let observable = this._http.deletePet(petAdopt);
      observable.subscribe(data => {
        console.log("Bye!", data);
        this._router.navigate(['/'])
    });
  }



//   onLike(_id){
//   let observable = this._http.addLike(_id, this.pet);
//   observable.subscribe(data => {
//     if (data['errors']) {
//       console.log(data);
//     }
//     else {
//       this.showOne(this.pet['_id']);
//       this.liked = true;
//     }
//   });
// }
}

