import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  //user$: Observable<firebase.User>;
  constructor(public auth: AuthService) {
    // afAuth.authState.subscribe(user => {
    //   this.user = user;
    // })
    //this.user$ = this.afAuth.authState;
  }

  logout() {
    this.auth.logout();
  }
}
