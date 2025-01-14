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
import { EffacerComponent } from "./effacer/effacer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HeaderComponent, FooterComponent, LoginComponent, CreateAccountComponent, AddComponent, EffacerComponent],
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
  appear_delete()
  {
    return this.join.showdelete;
  }
  backgroundurl=''
  background() {
    if (this.join.currentComponent === "welcome-page") {
      this.backgroundurl = 'https://images.unsplash.com/photo-1592466741848-20145fe5d6d7?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    } else if (this.join.currentComponent === "today_menu") {
      this.backgroundurl = 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    } else if (this.join.currentComponent === "ratedishes") {
      this.backgroundurl = 'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    } else if (this.join.currentComponent === "chefs") {
      this.backgroundurl = 'https://plus.unsplash.com/premium_photo-1683707120070-0c8c77bf44b6?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }
  }
  
}

