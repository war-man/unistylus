import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OopsComponent } from './pages/oops/oops.component';

import { CodeService } from './services/code/code.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    CodeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
