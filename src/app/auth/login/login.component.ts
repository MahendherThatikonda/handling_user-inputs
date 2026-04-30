import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = new FormGroup({
    email:new FormControl('',{
      validators:[Validators.email,Validators.required],
    }),
    password:new FormControl('')
  })
  
  get emailIsInvalid(){
    return this.form.controls.email.valid && this.form.controls.password.dirty
  }

  onSubmit(){

  }

}