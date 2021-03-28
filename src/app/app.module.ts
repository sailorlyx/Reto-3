import { TaskComponent } from './task/task.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { TaskdialogComponent } from './taskdialog/taskdialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    TaskComponent,
    TaskdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
