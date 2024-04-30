import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { contactComponent } from './contact/contact.component';

import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent, 
    contactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


