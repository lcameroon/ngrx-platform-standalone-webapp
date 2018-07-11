import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components';
import { BookEffects } from './effects/book.effects';
import { CollectionEffects } from './effects/collection.effects';
import { BookExistsGuard } from './guards/book-exists.guard';

import {
    FindBookPageComponent,
    ViewBookPageComponent,
    CollectionPageComponent,
    containers
} from './containers';

import { MaterialModule } from '../material';
import { reducers } from './reducers';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        RouterModule.forChild([
            { path: 'find', component: FindBookPageComponent },
            {
                path: ':id',
                component: ViewBookPageComponent,
                canActivate: [BookExistsGuard]
            },
            { path: '', component: CollectionPageComponent }
        ]),

        /**
         * StoreModule.forFeature is used for composing state
         * from feature modules. These modules can be loaded
         * eagerly or lazily and will be dynamically added to
         * the existing state.
         */
        StoreModule.forFeature('books', reducers),

        /**
         * Effects.forFeature is used to register effects
         * from feature modules. Effects can be loaded
         * eagerly or lazily and will be started immediately.
         *
         * All Effects will only be instantiated once regardless of
         * whether they are registered once or multiple times.
         */
        EffectsModule.forFeature([BookEffects, CollectionEffects])
    ],
    declarations: [...containers],
    providers: [BookExistsGuard]
})
export class BooksModule {}