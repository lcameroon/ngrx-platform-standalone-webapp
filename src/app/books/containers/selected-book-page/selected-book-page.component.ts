import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../../models/book';
import * as fromBooks from '../../reducers';
import * as CollectionActions from '../../actions/collection.actions';

@Component({
    selector: 'app-selected-book-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './selected-book-page.component.html',
    styleUrls: ['selected-book-page.component.scss']
})
export class SelectedBookPageComponent {
    book$: Observable<Book>;
    isSelectedBookInCollection$: Observable<boolean>;

    constructor(private store: Store<fromBooks.State>) {
        this.book$ = store.pipe(
            select(fromBooks.getSelectedBook)
        ) as Observable<Book>;
        this.isSelectedBookInCollection$ = store.pipe(
            select(fromBooks.isSelectedBookInCollection)
        );
    }

    addToCollection(book: Book) {
        this.store.dispatch(new CollectionActions.AddBook(book));
    }

    removeFromCollection(book: Book) {
        this.store.dispatch(new CollectionActions.RemoveBook(book));
    }
}
