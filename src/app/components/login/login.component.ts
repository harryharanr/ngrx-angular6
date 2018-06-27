import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Login, Logout } from 'src/app/auth.actions';
import { pipe } from 'rxjs/util/pipe';
import { map, filter, mergeMap, tap } from 'rxjs/operators';
import { noop } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe(state => console.log('state', state));
  }

  login() {
    this.authService.login('hari@gmail.com','12345')
      .pipe(
        tap(user => {
          this.store.dispatch(new Login({user}));
        })
      )
      .subscribe(
        noop,
        () => alert('Login Failed')
      );
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
