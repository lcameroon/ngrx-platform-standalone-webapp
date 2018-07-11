# Standalone @ngrx platform webapp

This app is a book collection manager. The user can authenticate, use the Google Books API to search for
books and add them to their collection. This application utilizes [@ngrx/db](https://github.com/ngrx/db)
to persist the collection across sessions; [@ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md) to manage
the state of the app and to cache requests made to the Google Books API;
[@ngrx/effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md) to isolate side effects; [@angular/router](https://github.com/angular/angular) to manage navigation between routes; [@angular/material](https://github.com/angular/material2) to provide design and styling.

Built with [@angular/cli](https://github.com/angular/angular-cli)

### Included

-   [@ngrx/store](../docs/store/README.md) - RxJS powered state management for Angular apps, inspired by Redux
-   [@ngrx/effects](../docs/effects/README.md) - Side effect model for @ngrx/store
-   [@ngrx/router-store](../docs/router-store/README.md) - Bindings to connect the Angular Router to @ngrx/store
-   [@ngrx/entity](../docs/entity/README.md) - Entity State adapter for managing record collections.
-   [@ngrx/store-devtools](../docs/store-devtools/README.md) - Instrumentation for @ngrx/store enabling time-travel debugging
-   [@ngrx/db](https://github.com/ngrx/db) - RxJS powered IndexedDB for Angular apps
-   [@angular/router](https://github.com/angular/angular) - Angular Router
-   [@angular/material](https://github.com/angular/material2) - Angular Material
-   [jest](https://facebook.github.io/jest/) - JavaScript test runner with easy setup, isolated browser testing and snapshot testing

### Quick start

```bash
# Install the dependencies
yarn

# Start the server
yarn run serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `yarn run build:prod` for a production build.

## Running unit tests

Run `yarn run test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `yarn run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
