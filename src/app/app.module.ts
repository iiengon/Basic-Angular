import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from './service/service.service'
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { CallapiComponent } from './components/callapi/callapi.component';

//router
const appRoutes: Routes = [
  {path: "user" , component:UserComponent},
  {path: "todo" , component:TodoComponent},
  {path: "callapi" , component:CallapiComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodoComponent,
    MenubarComponent,
    CallapiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
