import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
 signupform!: FormGroup

  constructor( private fb:FormBuilder, private http: HttpService){

  }
  ngOnInit(): void {
   
    this.signupStructure();
  }

  signupStructure(){
   this.signupform= this.fb.group({

      'user_name':this.fb.control(''),
      'user_email':this.fb.control(''),
      'user_contact': this.fb.control(''),
      'user_password':this.fb.control(''),
      'user_gender': this.fb.control('')
    })

 }
 signup(){

 

 }
}


