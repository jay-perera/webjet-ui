import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { MovieDetailComponent } from './Components/movie/movie-detail/movie-detail.component';
import { MovieListComponent } from './Components/movie/movie-list/movie-list.component';
import { MoviePreviewComponent } from './Components/movie/movie-preview/movie-preview.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      MovieDetailComponent,
      MovieListComponent,
      MoviePreviewComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
