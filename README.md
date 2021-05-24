# Angular 11 Basics

- [Angular 11 Basics](#angular-11-basics)
  * [Create a new angular project](#create-a-new-angular-project)
  * [Development server](#development-server)
  * [Code scaffolding](#code-scaffolding)
  * [Build](#build)
  * [Running unit tests](#running-unit-tests)
  * [Running end-to-end tests](#running-end-to-end-tests)
  * [Further help](#further-help)
  * [Install a node module locally](#install-a-node-module-locally)
  * [Data Binding and Components](#data-binding-and-components)
    + [Generate a component](#generate-a-component)
    + [Component selectors](#component-selectors)
    + [String Interpolation (curly braces)](#string-interpolation-curly-braces)
    + [Property Binding (no curly braces)](#property-binding-no-curly-braces)
    + [Event Binding](#event-binding)
    + [Two-Way-Databinding](#two-way-databinding)
    + [ngIf structural directive with Else condition](#ngif-structural-directive-with-else-condition)
    + [ngStyle attribute directive](#ngstyle-attribute-directive)
    + [ngClass directive](#ngclass-directive)
    + [ngFor directive](#ngfor-directive)
    + [ngFor getindex of current iteration](#ngfor-getindex-of-current-iteration)
    + [Constructor short hand. Generates public properties behind the scenes.](#constructor-short-hand-generates-public-properties-behind-the-scenes)
    + [Binding to custom properties (getting data from outside)](#binding-to-custom-properties-getting-data-from-outside)
    + [Binding to custom events (passing data up from one component to another)](#binding-to-custom-events-passing-data-up-from-one-component-to-another)
  * [View encapsulation](#view-encapsulation)
    + [Local reference](#local-reference)
    + [Getting access to the template & DOM with @ViewChild()](#getting-access-to-the-template-dom-with-viewchild)
    + [Projecting content into components with ng-content](#projecting-content-into-components-with-ng-content)
  * [Lifecycle](#lifecycle)
  * [Getting access to ng-content with @ContentChild](#getting-access-to-ng-content-with-contentchild)
  * [Directives](#directives)
    + [Structural directives](#structural-directives)
    + [Attribute directives](#attribute-directives)
    + [Creating your own attribute directive](#creating-your-own-attribute-directive)
    + [A better attribute directive using the renderer object](#a-better-attribute-directive-using-the-renderer-object)
    + [Using HostListener to Listen to Host Events](#using-hostlistener-to-listen-to-host-events)
    + [Using HostBinding to Bind to Host Properties](#using-hostbinding-to-bind-to-host-properties)
    + [Binding to directive properties](#binding-to-directive-properties)
    + [Building a structural directive](#building-a-structural-directive)
    + [ngSwitch](#ngswitch)
  * [Services & Dependency Injection](#services-dependency-injection)
    + [Motivation](#motivation)
    + [Injecting services into services](#injecting-services-into-services)
  * [Routing](#routing)
    + [Setting up and loading routes](#setting-up-and-loading-routes)
    + [Navigating with router links](#navigating-with-router-links)
    + [Styling active router links](#styling-active-router-links)
    + [Navigating programmatically](#navigating-programmatically)
    + [Using relative paths in programmatic navigation](#using-relative-paths-in-programmatic-navigation)
    + [Passing parameters to routes](#passing-parameters-to-routes)
    + [Fetching route parameters](#fetching-route-parameters)
    + [Passing query parameters](#passing-query-parameters)
    + [Retrieving query parameters](#retrieving-query-parameters)
    + [Another query parameters example](#another-query-parameters-example)
    + [Nested routes](#nested-routes)
    + [Using query parameters - practice](#using-query-parameters---practice)
    + [Wildcard routes](#wildcard-routes)
    + [Outsourcing the route configuration](#outsourcing-the-route-configuration)
    + [Guards](#guards)
    + [Protect nested routes with canActivateChild](#protect-nested-routes-with-canactivatechild)
    + [Controlling navigation with canDeactivate](#controlling-navigation-with-candeactivate)
    + [Passing static data to a route](#passing-static-data-to-a-route)
    + [Resolving dynamic data with the resolve guard](#resolving-dynamic-data-with-the-resolve-guard)
  * [Observables](#observables)
    + [Building a custom observable](#building-a-custom-observable)
    + [Understanding operators](#understanding-operators)
    + [Subjects](#subjects)
  * [Forms](#forms)
    + [TD: registering the controls with Angular (template-driven approach)](#td-registering-the-controls-with-angular-template-driven-approach)
    + [TD: submitting and using the form](#td-submitting-and-using-the-form)
    + [TD: accessing the form with @ViewChild](#td-accessing-the-form-with-viewchild)
    + [TD: adding validation](#td-adding-validation)
    + [TD: using the form state](#td-using-the-form-state)
    + [TD: outputting validation error messages](#td-outputting-validation-error-messages)
    + [TD: set default values with NgModel property binding](#td-set-default-values-with-ngmodel-property-binding)
    + [TD: using ngModel with two-way binding](#td-using-ngmodel-with-two-way-binding)
    + [TD: grouping form controls](#td-grouping-form-controls)
    + [TD: handling radio buttons](#td-handling-radio-buttons)
    + [TD: setting and patching form values](#td-setting-and-patching-form-values)
    + [TD: using form data](#td-using-form-data)
    + [TD: resetting forms](#td-resetting-forms)
    + [Reactive: setup](#reactive-setup)
    + [Reactive: creating a form](#reactive-creating-a-form)
    + [Reactive: syncing HTML and form](#reactive-syncing-html-and-form)
    + [Reactive: submitting the form](#reactive-submitting-the-form)
    + [Reactive: adding validation](#reactive-adding-validation)
    + [Reactive: getting access to controls](#reactive-getting-access-to-controls)
    + [Reactive: grouping controls](#reactive-grouping-controls)
    + [Reactive: arrays of form controls](#reactive-arrays-of-form-controls)
    + [Reactive: creating custom validators](#reactive-creating-custom-validators)
    + [Reactive: using error codes](#reactive-using-error-codes)
    + [Reactive: creating custom async validator](#reactive-creating-custom-async-validator)
    + [Reactive: reacting to status or value changes](#reactive-reacting-to-status-or-value-changes)
    + [Reactive: setting and patching values](#reactive-setting-and-patching-values)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


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

## Data Binding and Components

### Generate a component
Run `ng generate component <component-name>` or `ng g c <component-name>`
Run `ng g c <component-name> --skipTests true` to create a component without a test file

### Component selectors
The element selector `<app-server>` is commonly used for components rather than attribute `[app-server]` or class `.app-server` selectors.

### String Interpolation (curly braces)
```html
<p>{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

### Property Binding (no curly braces)
```html
<p [innerText]="!allowNewServer"></p>
```

### Event Binding
```html
<button (click)="onClick()" />
```

### Two-Way-Databinding
```html
<input 
 type="text"
 class="form-control"
 [(ngModel)]="serverName"
 >
 ```

### ngIf structural directive with Else condition
A directive is an instruction to the DOM
 ```html
 <!-- Directives -->
<p *ngIf="serverCreated; else noServer">Server was created, server name is {{ serverName }}</p>
<!-- Local reference (#)-->
<ng-template #noServer>
        <p>No server was created</p>
</ng-template>
```

### ngStyle attribute directive
```html
<!-- Attribute directive with property binding (binding to a property of the directive). It allows us to dynamically assign a styles -->
<p [ngStyle]="{backgroundColor: getColor()}">{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

### ngClass directive
<!-- Dynamically add or remove CSS styles -->
```html
<p [ngStyle]="{backgroundColor: getColor()}"
   [ngClass]="{online: serverStatus === 'online'}">{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

### ngFor directive
```html
<!-- Components are reusable -->
<app-server *ngFor="let server of servers"></app-server>
```

### ngFor getindex of current iteration
```html
<!-- Components are reusable -->
<app-server *ngFor="let server of servers; let i = index"></app-server>
```

### Constructor short hand. Generates public properties behind the scenes.
```typescript
export class Ingredient {
    constructor(public name: string, public amount: number){}
}
```

### Binding to custom properties (getting data from outside)
```typescript
@Input('srvElement') element: { type: string, name: string, content: string }
```
Then from the outside component, bind to this property.
```html
<app-server-element *ngFor="let serverElement of serverElements" [srvElement]="serverElement"><app-server-element>
```

### Binding to custom events (passing data up from one component to another)
```typescript
@Ouput() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
```
Then from outside component, bind to this event. The selector will listen to an event called 'serverCreated' and then execute the 'onServerAdded' function.
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

### Local reference
```html
<input #serverNameInput>
<button (click)="onAddServer(serverNameInput)">
```
```typescript
onAddServer(nameInput: HTMLInputElement){
  this.serverName = nameInput.value;
}
```

### Getting access to the template & DOM with @ViewChild()
```typescript
@ViewChild('local-reference-id') serverContentInput : ElementRef
```
Not recommended for accessing elements in the DOM to print something on the page. Use property and two-way binding.

### Projecting content into components with ng-content
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
- ngOnChanges - called after a bound input property changes. Before ngOnInit.
- ngOnInit - called once the component is initialized. After the constructor.
- ngDoCheck - called during every change detection run. This includes any event, even if the DOM is not changed, such as a button click. Useful if you want to do something on every change detection cycle (inform Angular of some change it would not know otherwise).
- ngAfterContentInit - called after content (ng-content) has been projected into view.
- ngAfterContentChecked - called every time the projected content has been checked
- ngAfterViewInit - called after the component's view (and child views) has been initialized
- ngAfterViewChecked - called every time the view (and child views) has been checked
- ngOnDestroy - called once the component is about to be destroyed

## Getting access to ng-content with @ContentChild
```typescript
@ContentChild('local-reference-id') paragraph : ElementRef
console.log(this.paragraph.NativeElement.textContent);
```

## Directives
### Structural directives
- *ngIf
- *ngFor

### Attribute directives
- ngClass
- ngStyle

### Creating your own attribute directive
```typescript
// run ng g d basic-highlight
@Directive({
 selector: '[appBasicHighlight]' 
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef){
    
  }
  
  // ngOnInit lifecycle hook
  ngOnInit(){
    this.elementRef.NativeElement.style.backgroundColor = 'green'
  }
}
// * register in *Declarations* array in app component
```

### A better attribute directive using the renderer object
```typescript
@Directive({
 selector: '[appBetterHighlight]' 
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: elementRef, private renderer: Renderer2){
    
  }
  
  // ngOnInit lifecycle hook
  ngOnInit(){
    // helper methods available to alter the DOM
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
// * register in *Declarations* array in app component
```

### Using HostListener to Listen to Host Events
Reacting to events the directive sits on
```typescript
@Directive({
 selector: '[appBetterHighlight]' 
})
export class BetterHighlightDirective implements OnInit {
  // listening to events on the element
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  
  @HostListener('mouseenter') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
  
  constructor(private elRef: elementRef, private renderer: Renderer2){
    
  }
  
  // ngOnInit lifecycle hook
  ngOnInit(){
  }
}
// * register in *Declarations* array in app component
```

### Using HostBinding to Bind to Host Properties
Alternative to using the renderer
```typescript
@Directive({
 selector: '[appBetterHighlight]' 
})
export class BetterHighlightDirective implements OnInit {
  // on the element this directive exists, access the style property and backgroundColor sub-property, and set to whatever backgroundColor is set to here
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // listening to events on the element
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }
  
  @HostListener('mouseenter') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
  
  constructor(private elRef: elementRef, private renderer: Renderer2){
    
  }
  
  // ngOnInit lifecycle hook
  ngOnInit(){
  }
}
// * register in *Declarations* array in app component
```

### Binding to directive properties
```typescript
@Directive({
 selector: '[appBetterHighlight]' 
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  
  // on the element this directive exists, access the style property and backgroundColor sub-property, and set to whatever backgroundColor is set to here
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // listening to events on the element
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseenter') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
  
  constructor(private elRef: elementRef, private renderer: Renderer2){    
  }
  
  // ngOnInit lifecycle hook
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
// * register in *Declarations* array in app component
```

### Building a structural directive
```typescript
export class UnlessDirective {
 @Input() set appUnless(condition: boolean) {
   // setter method of the unless property
   if(!condition){
     this.vcRef.createEmbeddedView(this.templateRef); // creates a view in this view container. The view is the templateRef
   }
   else {
     this.vcRef.clear(); // remove from this place in the DOM
   }
   
 }
 
 // templateRef: a reference to the template
 // vcRef: where to render the templateRef
 constructor(private templateRef TemplateRef<any>, private vcRef: ViewContainerRef) {
   
 }
}
```

```html
<div *appUnless="onlyOdd">
  ...
</div>
```

### ngSwitch
Useful if you find yourself creating many ngIf conditions. ngSwitch might be a better solution in such cases.
```html
<div [ngSwitch]="value">
  <p *ngSwitchCase="5">Value is 5</p>
  <p *ngSwitchCase="10">Value is 10</p>
  <p *ngSwitchCase="100">Value is 100</p>
  <p *ngSwitchDefault>Value is default</p>
</div>
```

## Services & Dependency Injection
### Motivation
- Passing information between components with Event Binding can be complex even on a simple application.
- Centralize the business unit and avoid code duplication.
- Store and manage data.
- Angular uses constructor injection to provide the services required by the component.
- Angular uses hierarchical injection. That is, the same instance provided is passed down to child components. 
  - AppModule: same instance of service is available application-wide
  - AppComponent: same instance of service is available for all components (but not other services)
  - Any other component: only available for the Component and all its child components
  - Addint to providers section will override instances from higher level components. If not desired, remove from providers array but leave the parameter in the constructor.

```typescript
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [LoggingService]
})
export class RecipeItemComponent implements OnInit {
  
  constructor(private loggingService: LoggingService) { }

  onSelected(){
    this.loggingService.log('say something');
  }
}
```

### Injecting services into services
```typescript @Injectible()``` decorator marks a class as available to be provided and injected as a dependency.

If you're using Angular 6+, Instead of adding a service class to the providers[]  array in AppModule , you can set the following config in @Injectable():
```typescript
@Injectable({providedIn: 'root'})
export class MyService { ... }
```
This approach allows services to be loaded lazily by Angular (behind the scenes) and redundant code can be removed automatically. This can lead to a better performance and loading speed - though this really only kicks in for bigger services and apps in general.

## Routing

### Setting up and loading routes
```typescript
// AppModule.ts
const appRoutes: Routes = [
 { path: 'users', component: UsersComponent }
 { path: 'servers', component: ServersComponent }
];

@NgModule({
...
imports: [
 // forRoot() allows us to register routes for our main application
 RouterModule.forRoot(appRoutes)
]
```
From the app component, include the 'router-outlet' directive. It marks the place in our document where we want the angular router to load the component of the currently selected route.
```html
<router-outlet></router-outlet>
  ```
  
### Navigating with router links
```html
<a routerLink="/servers">Servers</a>
<!-- absolute path -->
<a [routerLink]=['/users']>Users</a>
<!-- relative path -->
<a [routerLink]=['admin']>Users</a>
```
Relative path (no forward slash) appends the path in the routerLink directive to the current path.

### Styling active router links
The routerLinkActiveOptions property adds the classes only when the URL matches the link exactly.
```html
<li routerLinkActive="myActiveClassName" [routerLinkActiveOptions]="{exact: true}">
  <a routerLink="/">Home</a>
</li>
<li routerLinkActive="myActiveClassName">
  <a routerLink="/servers">Servers</a>
</li>
```

### Navigating programmatically
```html
<button (click)="onLoadServers()">Load Servers</button>
```
```typescript
export class HomeComponent implements OnInit {
 constructor(private router: Router) { }
 
 onLoadServers() {
  // complex calculation
  this.router.navigate(['/servers']);
 }
 ```
 
 ### Using relative paths in programmatic navigation
 Use the relativeTo property to tell Angular relative to what it should load the path.
 You can inject the active route in the constructor.
 ```typescript
 constructor(private router: Router, private route: ActivatedRoute) { }
 
 onReload() {
  this.router.navigate(['servers'], { relativeTo: this.route });
 }
 ```
 
 ### Passing parameters to routes
```typescript
const appRoutes: Routes = [
 { path: 'users/:id/:name', component: UsersComponent }
];
```

### Fetching route parameters
params is an observable An observable is a way to subscribe to some event in the future then execute some code when it happens without having to wait for it now.
Angular cleans up the subscription whenever the component is destroyed (unless you create a custom observable). For custom observables, unsubscribe in the OnDestroy() hook method.
```typescript
constructor(route: ActivedRoute) {
}

ngOnInit() {
 this.route.params.subscribe(
  (params: Params) => { 
    this.user.id = params['id'];
    this.user.name = params['name'] }
 );
}
```

### Passing query parameters
```[queryParams]``` is a bindable properby of the ```[routerLink]``` directive.
```html
<a [routerLink]=['/servers', 5, 'edit'] [queryParams]="{ allowEdit: '1' }" />
```
Programmatically:
```typescript
onServerLoad() {
 this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
}
```

### Retrieving query parameters
```typescript
constructor(private route: ActivatedRoute) { }

ngOnInit() {
 this.route.queryParams.subscribe();
}
```

### Another query parameters example
```typescript
const appRoutes: Routes = [
 { path: 'servers/:id', component: ServerComponent }
]
```
```html
<a [routerLink]="['/servers', server.id]" [queryParams]="{allowEdit: '1'}" />
```
Then from the component:
```typescript
constructor(private route: ActivatedRoute) { }

ngOnInit() {
 const id = +this.route.snapshot.params['id'];
 this.server = <your-service>.getServerById(id);
 this.route.params.subscribe({ 
  (params: Param) => { this.server = <your-service>.getServerById(+params['id']); }
 });
}
```

### Nested routes
```typescript
const appRoutes: Routes = [
  { path: 'Users', component: UsersComponent, children: [
      { path: 'Edit/:id', component: EditUserComponent }
    ]
  }
]
```
In the parent component, add a hook to all child routes.
```html
<div>
  <router-outlet></router-outlet>
</div>
```

### Using query parameters - practice
```typescript
onEdit() {
  this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
}
```
```html
<a [routerLink="['/servers', server.id]" [queryParams]="{allowEdit: server.id === 3 ? '1' : '0'}" fragment="loading" />
```
```typescript
this.route.queryParams.subscribe((queryParams: Params) => { this.allowEdit = queryParams['allowEdit'] === '1' ? true : false });
```

### Wildcard routes
Routes are processed from top to bottom so include wildcard route last.
```typescript
const appRoutes: Routes = [
  ...
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
]
```

### Outsourcing the route configuration
If you have more than 3 routes, defines the routes in a separate file rather than app.module. Typically, this is called app-routing.module.ts.
```typescript
const appRoutes: Routes = [
  ...
  ...
  ...
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:
    // tells Angular, "for this module, if I were to add this module to the imports of another module, what should be accessible to this module that imports this module?
    [RouterModule]
})
```
Finally, import this module in the 'imports' section of the app module.

### Guards
Logic executed before a route is loaded or once you are about to leave a route. Let's say you want to limit access to a route unless the user is logged in. Add a file called 'auth-guard.service.ts'.
```typescript
@Injectable
export class AuthGuard implements CanActivate  {
  constructor(private authService: AuthService, private router: Router);
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if(authenticated) {
            return true;
          } else {
            // redirect 
            router.navigate(['/'])
          }
        }
      );
  }
}
```
Use the guard in the route configuration module
```typescript
{ path: 'servers', canActivate: [AuthGuard], component: ServersComponent }
// register the AuthGuard in the 'providers' section of your app module
```

### Protect nested routes with canActivateChild
```typescript
@Injectable
export class AuthGuard implements CanActivate, CanActivateChild  {
  constructor(private authService: AuthService, private router: Router);
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    ...
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
```
Use the guard in the route configuration module
```typescript
{ path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent }
```

### Controlling navigation with canDeactivate
Useful if you need to alert the user if they are navigating away from the page without saving their changes, for example.

The can-deactivate-guard.service.ts
```typescript
export interface CanComponentDeactivate {
  canDeactivate () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate, 
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, 
    nextState?: routerStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
      return component.canDeactivate();
    }
}
```
From the app-routing-module, point to guard. Now Angular will load this guard everytime we try to leave this path.
```typescript
{ path: 'servers', canActivate: [AuthGuard], component: ServersComponent, canDeactivate: [CanDeactivateGuard] }
```
From the component, implement the interface
```typescript
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean {
    if (!this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    }
    else 
      return true;
  }
}
```

### Passing static data to a route
Use the data property to pass an object with key-value pairs
```typescript
{ path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} }
```
From the ErrorPageComponent
```typescript
constructor(private route:ActivatedRoute) {
}

ngOnInit() {
  // subscribe if this could change while you are still on the page, use the route and the data observable subscribed.
  this.errorMessage = this.route.data.subscribe((data: Data) => this.errorMessage = data['message']);
  // if this doesn't change, just access from the snapshot
  // this.errorMessage = this.route.snapshot.data['message'];
}
```

### Resolving dynamic data with the resolve guard
The resolve guard runs some logic before accessing the route. It does not decide whether to load the component, it just executes preloading logic. Useful if we want to load our data in advanced. Alternatively, could do this from the component's ngOnInit() method. Especially important when using asynchronous data.
```typescript
interface Server {
  id: number,
  name: string,
  status: string
  
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
  resolve(route: ActivatedRoute, stateSnapshot: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server  {
    // can either return data instantly or asynchronously 
    return this.myService.getServer(+route.params['id']);
  }
}
```
Map the resolver to the route
```typescript
{ path: 'servers', component: ServersComponent, canActivateChild: [CanDeactivateGuard], children: [
  { path: 'id', component: ServersComponent, resolve: {serverPreLoaded: ServerResolver}
] }
```
Use the resolve in the component
```typescript
ngOnInit() {
  this.route.data.subscribe((data: Data) => this.server = data['serverPreLoaded'])
}
```

## Observables
Observable = various data sources (user input events, http requests, triggered in code, ...). Constructs in which you subscribe to be informed of changes in data. Observable is an abstraction of an asynchronous stream of data.
Observer = your code. The subscribe function.

### Building a custom observable
```typescript
private firstObsSubscription: Subscription;

const customIntervalObservable = Observable.create(observer => {
 let count = 0;
 setInterval(() => { 
   observer.next(count); 
   if(count === 2) {
     observer.complete(); // observer comes to a halt. Not called on error.
   }
   if(count > 3) {
     observer.error(new Error('Count is greater than 3!')); // Cancels the observer. No more values are emitted.
   }
   count++; // or .error(), .complete() }, 1000 );
});

this.firstObsSubscription = customIntervalObservable.subscribe(data => { 
  console.log(data); 
}
, error => console.log(error);
, () => { console.log('Completed!'); }
);
```

### Understanding operators
- You use pipe() to chain operators. Operators allow you to build a chain of steps you want to funnel your observable data through, that can be really helpufl for transforming data, filtering out data, etc.
- map(): Takes an anonymous argument as a function. It transforms the data returned by the pipe() not by the customIntervalObservable. Map applies a projection to each value and emits that projection in the output Observable.
- filter(): takes values from the source Observable, passes them through a predicate function and only emits those values that yielded true.
```typescript
this.customIntervalObservable.pipe(
  filter(data => {
    return data > 0;
  }),
  map((data: number) => { // data is the data currently emitted by the observable
    return 'Round' + (data + 1); // transform data and return it.
})).subscribe(data => { 
  console.log(data); 
}
, error => console.log(error);
, () => { console.log('Completed!'); }
);
```

### Subjects
A better approach over event emitters for passing data between components. A special kind of observable. Can actively call "next()" on the subject from the outside. Can be used as an event emitter when communicating accross components with services. If we don't have a passive event source (http request, DOM) but something that actively needs to be triggered by us in the application. Unsubscribe whenever you don't need them (OnDestroy()).
```typescript
activatedEmitter = new Subject<boolean>();
```
 
 ## Forms
 
- Template-Driven approach: Angular infers the Form object from the DOM. (TD)
- Reactive approach: Form is created programmatically and synchronized with the DOM.

### TD: registering the controls with Angular (template-driven approach)
```html
<input type="text" ngModel name="username">
```

### TD: submitting and using the form
Add "#f" to create a local reference on the form control. This allows passing the form element as an event argument.
```html
<form (ngSubmit)="onSubmit(f)" #f>
```
```typescript
onSubmit(form: ElementRef) {
  console.log(form);
}
```

Give access to form JSON object created by Angular.
```html
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
```
```typescript
onSubmit(form: ngForm) {
  console.log(form);
}
```

### TD: accessing the form with @ViewChild
Useful if you need to access the form earlier than the point of form submission.
```typescript
@ViewChild('f') signupForm: ngForm;

onSubmit() {
  console.log(signupForm)
}
```

### TD: adding validation
You can use default HTML attributes which link to built in directives that ship with Angular. "Email" is not a valid HTML attribute but a directive in Angular. The directives will change the ngForm "valid" property to false if the validation is not successful.
- Angular dynamically adds Css classes that indicate the state of the form (ng-dirty, ng-touched, etc.).
```html
<input name="username" required email>
```
- Which Validators do ship with Angular? Check out here: https://angular.io/api/forms/Validators - these are all built-in validators.
- For the template-driven approach, you need the directives. You can find out their names, by searching for "validator" in the official docs: https://angular.io/api?type=directive

### TD: using the form state
```html
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
  <button type="submit" [disabled]="!f.valid">
</form>
```
You can customize the styling of invalid states with CSS classes. Take advantage of form state handled by Angular.
```css
input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {
  border: 1px solid red;
}
```

### TD: outputting validation error messages
```html
<input name="username" required email #email="ngModel">
<span class="help-block" *ngIf="!email.valid && email.touched">Please enter a valid email!</span>
```

### TD: set default values with NgModel property binding
```typescript
this.defaultQuestion = 'pet';
```
```html
<select name="secret" [ngModel]="defaultQuestion">
  <option value="pet">Your first pet?</option>
```

### TD: using ngModel with two-way binding
Use ngModel to get access to whatever the user has entered. Instantly output or do whatever you want to do.
```typescript
answer = '';
```
```html
<textarea name="questionAnswer" rows="3" [(ngModel)]="answer"></textarea>
<p>Your reply is {{ answer }}</p>
```

### TD: grouping form controls
Add structure to ngForm value Object. This will create an extra field in the value Object. It will also create a new object under the 'controls' property.
```html
<div id="user-data" ngModelGroup="userData">
  <div>...
```

### TD: handling radio buttons
```typescript
genders = ['male','female'];
```
```html
<div class="radio" *ngFor="let gender of genders">
  <label>
    <input type="radio" name="gender" ngModel value="gender" required>
    {{ gender }}
  </label>
</div>
```

### TD: setting and patching form values
You can set values for all controls using one convenient command called setValue(). You pass an exact copy of the form value as a JavaScript object.
```typescript
@ViewChild('f') signupForm: ngForm;
suggestUserName() {
  const suggestedName = "superUser";
  
  // set value of entire form
  this.signupForm.setValue({
    userData: {
      username: suggestedName,
      email = ''
    },
    secret = 'pet',
    gender = 'male',
    questionAndAnswer = ''
  });
  
  // a better approach. Only override certain parts of the form
  this.signupForm.form.patchValue({
    userData: {
      username: suggestedName;
    }
  });
}
```

### TD: using form data
```typescript
user = {
  username: '',
  email: ''
}

onSubmit() {
  this.submitted = true;
  this.user.username = this.signupForm.value.username; // the properties on the signup form match their 'name' property
  this.user.email = this.signupForm.value.email;
}
```
```html
<div class="row" *ngIf="submitted">
  <p>Username: {{ user.username }}</p>
  <p>Mail: {{ user.email }}</p>
</div>
```

### TD: resetting forms
If you want you can pass the same object as in setValue() to reset() which will then reset to specific values.
```typescript
this.signupForm.reset();
```
 
### Reactive: setup
Import ReactiveFormsModule in app.module.ts. Contains tools for building form programmatically.

### Reactive: creating a form
```typescript
signupForm: FormGroup;

ngOnInit() {
  this.signupForm = new FormGroup({
    'username': new FormControl(null),
    'email': new FormControl(null),
    'gender': new FormControl('male')
  });
}
```

### Reactive: syncing HTML and form
```html
<form [formGroup]="signupForm">
  <input type="text" formControlName="username">
  <input type="text" formControlName="email">
```

### Reactive: submitting the form
```html
<form (ngSubmit)="onSubmit()">
```
```typescript
signupForm: FormGroup;

onSubmit() {
  this.consolelog(this.signupForm);
}
```

### Reactive: adding validation
```typescript
ngOnInit() {
  this.signupForm = new FormGroup({
    'username': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'gender': new FormControl('male')
  });
}
```

### Reactive: getting access to controls
```html
<span *ngIf="!signupForm.get('username').valid && signupForm.get('username').touched" />
```

### Reactive: grouping controls
```typescript
 this.signupForm = new FormGroup({
    'userData': new FormGroup({    
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    }),
    'gender': new FormControl('male')
  });
```
```html
<form [formGroup]="signupForm">
  <div formGroupName="userData">
    <input type="text" formControlName="username">
    <input type="text" formControlName="email">
```

### Reactive: arrays of form controls
Dynamically add a control.
```html
<button type="button" (click)="onAddHobby()">Add control</button>
```
```typescript
this.signupForm = ({
  'hobbies' = new FormArray([])
})

onAddHobby() {
  const control = new FormControl(null, Validators.required);
  (<FormArray>this.signupForm.get('hobbies')).push(control);
}

getControls() {
  return (<FormArray>this.signupForm.get('hobbies')).controls;
}
```
Synchronize form with dynamically created input.
```html
<div formArrayName="hobbies">
  <div class="form-group" *ngFor="let hobbyControl of getControls(); let i = index">
    <input type="text" [formControlName=]"i" />
   </div>
</div>
```
Another example adding an array of ingredients to a recipe.
```typescript
  getControls() {
      return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){      
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          }))
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }
```
Then synchronizing the form.
```html
<form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">
  <div class="row">
      <div class="col-xs-12">
          <button type="submit" class="btn btn-success">Save</button>
          <button type="button" class="btn btn-danger">Cancel</button>
      </div>
  </div>
  <div class="row">
      <div class="col-xs-12">
          <div class="form-group">
              <label for="name">Name</label>
              <input
                  type="text"
                  id="name"
                  class="form-control"
                  formControlName="name" />
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12">
              <div class="form-group">
                  <label for="imagePath">Image URL</label>
                  <input
                      type="text"
                      id="imagePath"
                      class="form-control"
                      formControlName="imagePath" />
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12">
              <img src="" class="img-responsive">
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12">
              <div class="form-group">
                  <label for="description">Description</label>
                  <textarea
                      type="text"
                      id="description"
                      class="form-control" 
                      rows="6"
                      formControlName="description"></textarea>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12" formArrayName="ingredients">
              <div class="row" 
                  *ngFor="let ingredientControl of getControls(); let i = index"
                  [formGroupName]="i">
                  <div class="col-xs-8">
                      <input
                          type="text"
                          class="form-control"
                          formControlName="name" />
                  </div>
                  <div class="col-xs-2">
                      <input
                          type="number"
                          class="form-control"
                          formControlName="amount" />
                  </div>
                  <div class="col-xs-2">
                      <button class="btn btn-danger">X</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</form>
```

### Reactive: creating custom validators
```typescript
forbiddenUsernames = ['Chris','Anna'];

forbiddenNames(control: FormControl): {[s: string], boolean} {
  if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
    return {'nameIsForbidden': true}
  }
  return null; // tells Angular the form control is valid
}

this.signupForm = ({
  'username': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/), this.forbiddenNames.bind(this)])
})
```

### Reactive: using error codes
```html
<span *ngIf="signupForm.get('userData.username').errors['required']">
```

### Reactive: creating custom async validator
When you need to reach the server to make validation. Wait for a response before returning true/false/
```typescript
forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  const promise = new Promise<any>((resolve, reject) => {
    if (control.value == 'test@test.com') resolve({ 'emailIsForbidden': true});
    else resolve(null);
  });
}

this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
```

### Reactive: reacting to status or value changes
Hook observables you can subscribe to to closely watch what happens on your form or individual control and want to react to that.
```typescript
this.signupForm.valueChanges.subscribe(
  (value) => console.log(value);
);
this.signupForm.statusChanges.subscribe(
  (status) => console.log(status);
);
```

### Reactive: setting and patching values
```typescript
// update the entire form
this.signupForm.setValue({
  'userData': {
    'username': 'Max',
    'email': 'max@test.com',
    'gender': 'male'
  }
});

// only update a part of the form
this.signupForm.patchValue({
  'userData': {
    'username': 'Anna'
  }
});
```

## Pipes
A feature in Angular 2 that allows transforming output in a template.

### Using pipes
```html
<p>{{ server.instancetype | uppercasse }}</p>
<p>{{ server.started | date }}</p>
```

### Parameterizing pipes
```html
<p>{{ server.started | date:'fullDate' }}</p>
```

### Built-in pipes
https://angular.io/api?query=pipe

### Chaining multiple pipes
```html
<p>{{ server.started | date:'fullDate' | uppercase }}</p>
```

### Creating a custom pipe
```typescript
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any) {
    if(value.length > 10)
      return value.substr(0, 10) + ' ...';
    return value;
  }
}
```
Add custom pipes to declarations
```typescript
@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe
  ],
  imports: ...
})
```
```html
<p>{{ server.name | shorten }}</p>
```

### Parameterizing custom pipes
```typescript
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limite: number, anotherArg: any) {
    if(value.length > limit)
      return value.substr(0, limit) + ' ...';
    return value;
  }
}
```
```html
<p>{{ server.name | shorten:5:someOtherArgument }}</p>
```

### Creating a filter pipe
```html
<input type="text" [(ngModel)]="filteredStatus">
```
Generate pipe boilerplate code with the ```ng g p``` command
```bash
ng g p <pipe_name>
```
```typescript
@Pipe({
  name: 'filter'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string) {
    if(value.length === 0 || filterString === '')
      return value;
    
    const resultArray = [];
    for (const item of value) {
      if(item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
```
```html
<li *ngFor="let server of servers | filter: filteredStatus: 'status'"></li>
```
Angular does not rerun the pipe whenever the data changes. There's a high performance cost. There's no built-in filter pipe in Angular. This behavior can be enforced by including the "pure: false" property on the pipe's @Pipe decorator.

## Making Http Requests

### How does Angular interact with backends?
Database credentials are not stored in the database. Instead, Angular communicatest with the database through Http requests. The API has the code to store and fetch data from the database.

### Anatomy of a Http request
URL (API endpoint) + Http verb (POST, GET, PUT, ...) + Headers (metadata) + Body

### Sending a POST request
Import the HttpClientModule. An observable wraps the Http request. You must subscribe to it.
```typescript
onCreatePost(postData: { title: string, content: string }) {
  this.http.post('https://.../posts/add', postData)
    .subscribe(responseData => {
      console.log(responseData);
  }); // Angular automatically transforms post data to JSON
}
```

### Getting the data
```typescript
ngOnInit() {
  this.fetchPosts();
}

private fetchPosts() {
  this.http.get('https://...')
    .subscribe(posts => {
      console.log(posts);
    });
}
```

### Using RxJS operators to transform data
Using observable operators allows us to write cleaner code. Pipe() allows us to funnel the response data through multiple operators before they reach the subscribe method. The map() operator allows us to get some data and return new data re-wrapped into an observable so we can resubscribe to it.
```typescript
private fetchPosts() {
  this.http.get('https://...')
    .pipe(map(responseData => {
        // return an array of posts
        const postsArray = [];
        for(const key in responseData) {
          if(responseData.hasOwnProperty(key)){ // verify you are not accessing the key of some prototype
            postsArray.push({...responseData[key], id: key }); // the spread operator "..." pulls out the key-value pairs of the nested object we are accessing
          }          
        }
        return postsArray;
      })     
    )
    .subscribe(posts => {
      console.log(posts);
    });
}
```

### Using types with HttpClient
You can indicate the type on the generic Http verb methods
```typescript
private fetchPosts() {
  this.http.get<{ [key: string]: Post }>('https://...')
    .pipe(map(responseData => {
        // return an array of posts
        const postsArray: Post[] = [];
        for(const key in responseData) {
          ...
}
```

### Outputting the response
```html
<p *ngIf="loadedPosts.length < 1">No posts available!</p>
<ul *ngIf="loadedPOsts.lengt >= 1">
  <li *ngFor="let post of loadedPosts">
    <h3>{{ post.Title }}</h3>
    <p>{{ post.Content }}</h3>
</ul>
```

### Adding a loading indicator
Make sure the "No posts available" isn't render until after the posts are loaded.
```html
<p *ngIf="loadedPosts.length < 1 && !isFetching">No posts available!</p>
<ul *ngIf="loadedPOsts.lengt >= 1">
  <li *ngFor="let post of loadedPosts">
    <h3>{{ post.Title }}</h3>
    <p>{{ post.Content }}</h3>
</ul>
<p *ngIf="isFetching">Loading...</p>
```
```typescript
this.isFetching = false;

private fetchPosts(){
  this.isFetching = true;
  ...
  .subscribe(posts => { 
    this.isFetching = false;
    this.loadedPosts = posts;
  }
}
```

### Using a service for Http requests
Move handling of the results to the component. The heavy lifting is moved to the service layer.

From the component
```typescript
onCreatePost(postData: Post) {
  this.postService.createAndStorePost(postData.title, postData.content) {
}

onFetchPosts() {
  this.isFetching = true;
  this.postService.fetchPosts.subscribe(posts => {
    this.isFetching = false;
    this.loadedPosts = posts;
  });
}
```

From the service
```typescript
export class PostsService {
  constructor(private http: HttpClient) {}
  
  createAndStorePost(_title:string, _content:string) {
    const postData: Post = { title: _title, content: _content };
    this.http
      .post<{ name: string }>(
        'posts/create',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData)
      });
  }
}
```

### Sending a DELETE request
From the service
```typescript
deletePosts() {
  this.http.delete('https://posts/delete);
}
```
From the component, subscribe
```typescript
onClearPosts() {
  this.postService.deletePosts().subscribe(() => {
    this.loadedPosts = [];
  });
}
```

### Handling errors
From the component, create an 'error' variable and assign a value in the subscribe error handling function.
```typescript
error = null;
```
```html
<p *ngIf="isFetching">Loading...</p>
<div class="alert alert-danger">
  <h3>An error has ocurred</h3>
  <p>Error</p>
</div>
```
```typescript
onFetchPosts() {
  this.postsService.fetchPosts().subscribe(() => {
    ...
  }, error => {
    this.error = error.message;
  });
}
```

### Using subjects for error handling
Use a subject if there are multiple areas in the application interested in the error. From the posts service
```typescript
error = new Subject<string>();

createAndStorePost(_title:string, _content:string) {
  const postData: Post = { title: _title, content: _content };
  this.http
    .post<{ name: string }>(
      'posts/create',
      postData
    )
    .subscribe(responseData => {
      console.log(responseData)
    }, error => {
      this.error.next(error.message);
    });
}
```
Subscribe to the subject wherever that error message is relevant
```typescript
private errorSub: Subscription;

ngOnInit() {
  this.erroSub = this.postService.error.subscribe(errorMessage => {
    this.error = errorMessage;
  });
}

ngOnDestroy() {
  this.errorSub.unsubscribe();
}
```

### Using the catchError operator
Use catchError for non-UI related, generic handling error task. throwError RxJS object yields an observable by wrapping an error.
```typescript
private fetchPosts() {
  this.http.get<{ [key: string]: Post }>('https://...')
    .pipe(map(responseData => {
        // return an array of posts
        const postsArray: Post[] = [];
        for(const key in responseData) {
          ...
    }),
    catchError(errRes => {
      // send to analytics server. Non-UI related, generic handling error task
      // then pass on the error
      return throwError(errRes);
    });
}
```

### Setting headers
Any Http method has an object to configure the request using key-value notation.
```typescript
onFetchPosts() {
  return this.http.get<{ [key: string] : Post }>({
    headers: new HttpHeaders({ "Custom-Header": "Hello" })
  });
}
```

### Adding query parameters
```typescript
onFetchPosts() {
  return this.http.get<{ [key: string] : Post }>({
    headers: new HttpHeaders({ "Custom-Header": "Hello" }),
    params: new HttpParams().set('print', 'pretty')
  });
}
```
Alternatively, you can also append to the HttpParams object like this
```typescript
let searchParams = new HttpParams();
searchParams = searchParams.append('print','pretty');

onFetchPosts() {
  return this.http.get<{ [key: string] : Post }>({
    headers: new HttpHeaders({ "Custom-Header": "Hello" }),
    params: searchParams
  });
}
```

### Observing different types of responses
Have granular control of your request status
```typescript
this.http
    .post<{ name: string }>(
      'posts/create',
      postData,
      {
        observe: 'response' // or 'body', 'events'
      }
    )
```
Observing the 'events' response
```typescript
this.http.delete('url...', { observe: 'events' } )
  .pipe(
    .tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        // do something in the UI notifying the user the request was sent
      }
      if (event.type === HttpEventType.Response)
      {
        console.log(event.Body);
      }
    });
```

### Changing the response body type
```typescript
this.http.delete('url...', { 
    observe: 'events',
    responseType: 'json' // or 'text', 'blob'
  })
```

### Interceptor
Runs code right before response is forwarded to subscribe or before request leaves your app. 'Next' allows request to continue its journey
``typescript
import { HttpInterceptor } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any, next: HttpHandler) {
    console.log('request on the way');
    return next.handle(req);
  }
}
```















