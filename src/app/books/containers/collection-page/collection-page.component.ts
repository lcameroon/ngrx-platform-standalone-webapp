import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../../models/book';
import * as CollectionActions from '../../actions/collection.actions';
import * as fromBooks from '../../reducers';

@Component({
    selector: 'app-collection-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './collection-page.component.html',
    styleUrls: ['collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
    books$: Observable<Book[]>;

    constructor(private store: Store<fromBooks.State>) {
        this.books$ = store.pipe(select(fromBooks.getBookCollection));
    }

    ngOnInit() {
        this.store.dispatch(new CollectionActions.Load());
    }
}
