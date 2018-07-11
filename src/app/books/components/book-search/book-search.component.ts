import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-book-search',
    templateUrl: './book-search.component.html',
    styles: ['book-search.component.scss']
})
export class BookSearchComponent {
    @Input() query = '';
    @Input() searching = false;
    @Input() error = '';
    @Output() search = new EventEmitter<string>();
}
