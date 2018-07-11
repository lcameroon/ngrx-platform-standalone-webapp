import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Authenticate } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as AuthActions from '../../actions/auth.actions';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
    // styleUrls: []
})
export class LoginPageComponent implements OnInit {
    pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
    error$ = this.store.pipe(select(fromAuth.getLoginPageError));

    constructor(private store: Store<fromAuth.State>) {}

    ngOnInit() {}

    onSubmit($event: Authenticate) {
        this.store.dispatch(new AuthActions.Login($event));
    }
}
