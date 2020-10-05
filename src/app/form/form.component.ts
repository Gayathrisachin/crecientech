import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/user.model';
import { UserService } from '../Service/user.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  date=new Date().toISOString().substring(0,10)
  jsonDate=JSON.stringify(this.date)

 
  language = [
    {
      "lang":"",
     "currency":""
    },
  ]
    form: FormGroup;

    searchValue:string = '';
  
  // minDate = new Date(1981,0,1).toISOString().substring(0, 10);
  // maxDate = new Date().toISOString().substring(0, 10);

 
    constructor(private formBuilder: FormBuilder,private router:Router,private svc:UserService) { 
    }
  
    // date:any
    ngOnInit(  
    ) {
    
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
  
      // this.formJoin=new FormGroup({form1:this.studentForm,form2:this.parentsForm})
    
    
    }
   
    addLanguage(index) {
      (<FormArray>this.form.get('languages')).push(this.formBuilder.group({
        lang: [],
        currency: []
      }));
     

    }
  
    createRegister(){
     
      if (this.form.valid) {
  
                 this.svc.createAdmission(this.form.value )
                 .subscribe( data => {
                 });
    }
    console.log(this.form.value)
    }
  
   hasError = (controlName: string, errorName: string) =>{
      return this.form.controls[controlName].hasError(errorName);
    }
   
  
    get languages() {
      return (<FormArray>this.form.get('languages')).controls;
  
    }
  
}
