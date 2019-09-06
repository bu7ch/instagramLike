import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { FollowingComponent } from './components/following/following.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'allposts', component: AllPostsComponent},
  {path:'following', component: FollowingComponent},
  {path:'favorites', component: FavoritesComponent},
  {path:'MyPosts', component: AppComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
