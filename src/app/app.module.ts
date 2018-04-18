
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColaborationComponent } from './colaboration/colaboration.component';
import { UsersService } from './services/test.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StyleDirective } from './directives/style.directive';
import { OneComponent } from './one/one.component';


@NgModule({
  declarations: [
    AppComponent,
    ColaborationComponent,
    StyleDirective
    OneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
