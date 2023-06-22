import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform!:FormGroup

  constructor( private fb:FormBuilder, private http:HttpService){

  }
  ngOnInit(): void {
   
    this.Loginstructure();
  }

  Loginstructure(){

    this.loginform = this.fb.group({

      'user_email':this.fb.control(''),
      'user_password':this.fb.control('')

    })
  }

    login(){

          let endPoint= 'login?' + 'user_email=' +this.loginform.get('user_email')?.value + '&' + this.loginform.get('user_password')?.value 

            this.http.getDatafromServer(endPoint).subscribe(
             (respone:any)=>
             {

                      
          },
         ()=>{


      } )
  }

}
