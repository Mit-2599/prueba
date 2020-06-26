import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudioComponent } from './components/studio/studio.component';
import { PeopleComponent } from './components/people/people.component';
import { TalkComponent } from './components/talk/talk.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudioComponent,
    PeopleComponent,
    TalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
