# Angular 10 Basics

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
 
 
