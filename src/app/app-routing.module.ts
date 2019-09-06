import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { FollowingComponent } from './components/following/following.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { CanActivateGuard } from "./auth/route-guard";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'allposts', component: AllPostsComponent, canActivate: [CanActivateGuard]},
  {path:'following', component: FollowingComponent, canActivate: [CanActivateGuard]},
  {path:'favorites', component: FavoritesComponent, canActivate: [CanActivateGuard]},
  {path:'MyPosts', component: MyPostsComponent, canActivate: [CanActivateGuard]},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
