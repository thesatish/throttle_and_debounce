import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeContentComponent } from './dashboard/home-content/home-content.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SecurityInterceptor } from './interceptors/security.interceptor';
import { NetworkInterceptor } from './interceptors/network.interceptor';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeContentComponent,
    UserComponent,
    SettingsComponent,
    ForbiddenComponent,
    NotFoundComponent,
    HeaderComponent,
    MainLayoutComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true }],
  bootstrap: [AppComponent],

})
export class AppModule { }
