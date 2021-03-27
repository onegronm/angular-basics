# MyFirstAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Create a new angular project
```shell
ng new my-project-name
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Install a node module locally
Run `npm install --save bootstrap@3`

## Generate a component
Run `ng generate component <component-name>` or `ng g c <component-name>`
Run `ng g c <component-name> --skipTests true` to create a component without a test file

## Component selectors
The element selector `<app-server>` is commonly used for components rather than attribute `[app-server]` or class `.app-server` selectors.

## String Interpolation (curly braces)
```html
<p>{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

## Property Binding (no curly braces)
```html
<p [innerText]="!allowNewServer"></p>
```

## Event Binding
```html
<button (click)="onClick()" />
```

## Two-Way-Databinding
```html
<input 
 type="text"
 class="form-control"
 [(ngModel)]="serverName"
 >
 ```

 ## ngIf structural directive with Else condition
 ### A directive is an instruction to the DOM
 ```html
 <!-- Directives -->
<p *ngIf="serverCreated; else noServer">Server was created, server name is {{ serverName }}</p>
<!-- Local reference (#)-->
<ng-template #noServer>
        <p>No server was created</p>
</ng-template>
```

## ngStyle attribute directive
```html
<!-- Attribute directive with property binding (binding to a property of the directive). It allows us to dynamically assign a styles -->
<p [ngStyle]="{backgroundColor: getColor()}">{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

## ngClass directive
<!-- Dynamically add or remove CSS styles -->
```html
<p [ngStyle]="{backgroundColor: getColor()}"
   [ngClass]="{online: serverStatus === 'online'}">{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

## ngFor directive
```html
<!-- Components are reusable -->
<app-server *ngFor="let server of servers"></app-server>
```

## ngFor getindex of current iteration
```html
<!-- Components are reusable -->
<app-server *ngFor="let server of servers; let i = index"></app-server>
```

## Constructor short hand. Generates public properties behind the scenes.
```typescript
export class Ingredient {
    constructor(public name: string, public amount: number){}
}
```

## Assigning an alias to custom properties
```typescript
@Input('srvElement') element: { type: string, name: string, content: string }
```
### then from the outside bind to this property
```html
<app-server-element *ngFor="let serverElement of serverElements" [srvElement]="serverElement"><app-server-element>
```
