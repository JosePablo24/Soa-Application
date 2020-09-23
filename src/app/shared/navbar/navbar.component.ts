import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../../auth/services/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  public isloged = false;  
  public user$ : Observable<any> = this.auth.afAuth.user
  constructor(private auth: AuthService, private router: Router) { }

  async ngOnInit() {       
  }

  async logoutController() {    
    try {
      await this.auth.logout()       
      this.router.navigate(['/login'])
    } catch (error) {
      console.error(error);      
    }        
  }

}
