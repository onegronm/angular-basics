import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // don't add .ts to imports (added by WebPack, a typescript feature)

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent // register your own components
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // tells Angular which component to recognize in the index.html at startup
})
export class AppModule { }
