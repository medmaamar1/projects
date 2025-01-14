import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from "./menu/menu.component";
import { ChefComponent } from './chef/chef.component';
import { RatingComponent } from './rating/rating.component';
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { LoginComponent } from "./login/login.component";
import { JoinService } from './join.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { CreateAccountComponent } from "./create-account/create-account.component";
import { AddComponent } from "./add/add.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HeaderComponent, FooterComponent,  LoginComponent, CreateAccountComponent, AddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Cantine';
  constructor(private join:JoinService)
  { 
  }
  appear__create_account()
  {
    return this.join.show_create_account;
  }
  appear_login()
  {
    return this.join.shown
  }
  closeLogin()
  {
    this.join.shown=false;
  }
  appear_add()
  {
    return this.join.showadd;
  }
}

