import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CardContainerComponent } from './shared/card-container/card-container.component';
import { HomeComponent } from './home/home.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';
import { RegisterComponent } from './register/register.component';
import { PrincipalMenuComponent } from './principal-menu/principal-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CardContainerComponent,
    HomeComponent,
    RecoverPassComponent,
    RegisterComponent,
    PrincipalMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
