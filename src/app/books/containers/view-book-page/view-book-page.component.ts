import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromBooks from '../../reducers';
import * as BookActions from '../../actions/book.actions';

/**
 * Note: Container components are also reusable. Whether or not
 * a component is a presentation component or a container
 * component is an implementation detail.
 *
 * The View Book Page's responsibility is to map router params
 * to a 'Select' book action. Actually showing the selected
 * book remains a responsibility of the
 * SelectedBookPageComponent
 */
@Component({
    selector: 'app-view-book-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './view-book-page.component.html',
    styleUrls: ['view-book-page.component.scss']
})
export class ViewBookPageComponent implements OnDestroy {
    actionsSubscription: Subscription;

    constructor(store: Store<fromBooks.State>, route: ActivatedRoute) {
        this.actionsSubscription = route.params
            .pipe(map(params => new BookActions.Select(params.id)))
            .subscribe(store);
    }

    ngOnDestroy() {
        this.actionsSubscription.unsubscribe();
    }
}
