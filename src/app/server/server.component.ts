import { Component } from '@angular/core'; // import { <NgModule or Decorator> } from <library>

@Component({ // <- class decorator
    selector: 'app-server', // unique selector name. Prefix with 'app-'
    templateUrl: './server.component.html', // template html code of component
    styles: [`
        .online {
            color: white;
        }
    `]
}) 
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}