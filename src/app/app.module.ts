import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { FollowingComponent } from './components/following/following.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostsComponent,
    FollowingComponent,
    FavoritesComponent,
    MyPostsComponent,
    SignInComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
