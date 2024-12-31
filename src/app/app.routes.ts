import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MenuComponent } from './menu/menu.component';
import { ChefComponent } from './chef/chef.component';
import { RatingComponent } from './rating/rating.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: WelcomePageComponent},  // Default route
    { path: 'home', component: WelcomePageComponent},
    { path: 'menu', component: MenuComponent },
    { path: 'chefs', component: ChefComponent },
    { path: 'ratings', component: RatingComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })


export class AppRoutingModule {}
