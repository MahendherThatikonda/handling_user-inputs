import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmit(formData:NgForm){
  // console.log(form);
  if(!formData.form.valid){
    return
  }
  const enteredEmail=formData.form.value.email
    const enteredpassword=formData.form.value.password

    console.log(enteredEmail,enteredpassword);
  }
}
