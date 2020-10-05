import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../Models/user.model';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
form:FormGroup
id:number
// @Input() user: User;
date=new Date().toISOString().substring(0,10)
jsonDate=JSON.stringify(this.date)

language = [
  {
    "lang":"",
   "currency":""
  },
]
  constructor(private formBuilder:FormBuilder,private svc:UserService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list']);
      return;
    }
    this.form = this.formBuilder.group({
      id:[''],
       firstName: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
       lastName: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
       dateOfBirth:[this.jsonDate, Validators.required],
       gender: ['', Validators.required],
       email: ['',Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
       phoneNumber: ['',[ Validators.required,Validators.pattern('[6-9]\\d{9}')]],
       home: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
       identification: ['', Validators.required],
      about:[],
       languages:this.formBuilder.array([]),

    
         
     });
     this.svc.getById(+userId)
     .subscribe( data => {
       this.form.patchValue(data);
     });
}

addLanguage(index) {
  (<FormArray>this.form.get('languages')).push(this.formBuilder.group({
    lang: [],
    currency: []
  }));
 

}
get languages() {
  return (<FormArray>this.form.get('languages')).controls;

}

hasError = (controlName: string, errorName: string) =>{
  return this.form.controls[controlName].hasError(errorName);
}
onSubmit() {
  this.svc.updateUser(this.form.value)
  .pipe(first())
  .subscribe(
    data => {
      this.router.navigate(['list']);
    },
    error => {
      alert(error);
    });
}
}
