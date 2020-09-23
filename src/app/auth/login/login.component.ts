import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';


import { AuthService } from './../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email :  new FormControl(''),
    password : new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async ingresoController() {
    const {email, password} = this.loginForm.value
    try {      
      const user = this.auth.login(email,password)
      if (user) {
        this.router.navigate(['/home'])
      }
      console.log("Login → ", this.loginForm.value);
      
    } catch (error) {
      console.log(error);
      
      
    }
    
  }

}
