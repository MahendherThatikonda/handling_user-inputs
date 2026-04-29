import { Component, DestroyRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { viewChild } from '@angular/core';
import { afterNextRender } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  private form =viewChild.required<NgForm>('form')
  private destroyref=inject(DestroyRef)

  constructor(){
  afterNextRender(()=>{

  const savedForm=window.localStorage.getItem('saved-login-form')

  if(savedForm){
    const loadedFormData=JSON.parse(savedForm);
    const savedEmail=loadedFormData.email;
    
    setTimeout(()=>{
    this.form().controls['email'].setValue(savedEmail);
    },1)


  }

    const subscription= this.form()?.valueChanges?.subscribe({
    next:(value)=>window.localStorage.setItem('saved-login-form',JSON.stringify({email:value.email}))
   });
   this.destroyref.onDestroy(()=> subscription?.unsubscribe())
  })
  }

  onSubmit(formData:NgForm){
  // console.log(form);
  if(!formData.form.valid){
    return
  }
  const enteredEmail=formData.form.value.email
    const enteredpassword=formData.form.value.password

    console.log(enteredEmail,enteredpassword);
    formData.form.reset();
  }
}
