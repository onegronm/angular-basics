import { Component } from '@angular/core'; // import { <NgModule or Decorator> } from <library>

@Component({ // <- class decorator
    selector: 'app-server', // unique selector name. Prefix with 'app-'
    templateUrl: './server.component.html' // template html code of component
}) 
export class ServerComponent {

}