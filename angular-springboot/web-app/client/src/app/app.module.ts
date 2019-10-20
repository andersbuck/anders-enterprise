import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorHandler } from './providers/global-error.handler';
import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
