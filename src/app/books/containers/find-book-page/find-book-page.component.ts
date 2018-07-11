import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Book } from '../../models/book';
import * as BookActions from '../../actions/book.actions';
import * as fromBooks from '../../reducers';

@Component({
    selector: 'app-find-book-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './find-book-page.component.html',
    styleUrls: ['find-book-page.component.scss']
})
export class FindBookPageComponent {
    searchQuery$: Observable<string>;
    books$: Observable<Book[]>;
    loading$: Observable<boolean>;
    error$: Observable<string>;

    constructor(private store: Store<fromBooks.State>) {
        this.searchQuery$ = store.pipe(
            select(fromBooks.getSearchQuery),
            take(1)
        );
        this.books$ = store.pipe(select(fromBooks.getSearchResults));
        this.loading$ = store.pipe(select(fromBooks.getSearchLoading));
        this.error$ = store.pipe(select(fromBooks.getSearchError));
    }

    search(query: string) {
        this.store.dispatch(new BookActions.Search(query));
    }
}
