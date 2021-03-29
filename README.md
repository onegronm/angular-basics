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

## Binding to custom properties (passing data down from one component to another)
```typescript
@Input('srvElement') element: { type: string, name: string, content: string }
```
### then from the outside component, bind to this property
```html
<app-server-element *ngFor="let serverElement of serverElements" [srvElement]="serverElement"><app-server-element>
```

## Binding to custom events (passing data up from one component to another)
```typescript
@Ouput() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
```
### then from outside component, bind to this event. The selector will listen to an event called 'serverCreated' and then execute the 'onServerAdded' function
```html
<app-cockpit (serverCreated)="onServerAdded($event)"></app-cockpit>
```
```typescript
onServerAdded(serverData: {serverName: string, serverContent: string}){
  // ...
}
```

## View encapsulation
Only the component receives the styles you defined for it rather than being applied globally. This is possible because Angular assigns unique attributes to HTML elements on the component.

## Local reference
```html
<input #serverNameInput>
<button (click)="onAddServer(serverNameInput)">
```
```typescript
onAddServer(nameInput: HTMLInputElement){
  this.serverName = nameInput.value;
}
```

## Getting access to the template & DOM with @ViewChild()
```typescript
@ViewChild('local-reference-id') serverContentInput : ElementRef
```
Not recommended for accessing elements in the DOM to print something on the page. Use property and two-way binding.

## Projecting content into components with ng-content
By default, Angular ignores the content placed between the opening and closing tags of your own components. By using the ng-content directive, Angular will project this content into a component. Useful for complex HTML you want to pass into a component from outside. For example, building reusable widgets, like a tab widget, where each widget will content coming from another source. For complex HTML code, property binding is not the best solution.

From the app component
```html
<app-server-element>
  <p>Hello world!</p>
</app-server-element>
```

From the server element component template, add the ng-content directive. This serves as a hook to mark the place for Angular where it should add any content it finds between the opening and closing tag in the app component.
```html
<ng-content></ng-content>
```

## Lifecycle
ngOnChanges - called after a bound input property changes. Before ngOnInit.
ngOnInit - called once the component is initialized. After the constructor.
ngDoCheck - called during every change detection run. This includes any event, even if the DOM is not changed, such as a button click. Useful if you want to do something on every change detection cycle (inform Angular of some change it would not know otherwise).
ngAfterContentInit - called after content (ng-content) has been projected into view.
ngAfterContentChecked - called every time the projected content has been checked
ngAfterViewInit - called after the component's view (and child views) has been initialized
ngAfterViewChecked - called every time the view (and child views) has been checked
ngOnDestroy - called once the component is about to be destroyed

