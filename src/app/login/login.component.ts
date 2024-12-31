import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { JoinService } from '../join.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  user_exist=true;
  public checkUserExists(username: string, password: string): boolean {
    if(this.join.users.some(user => user.username === username && user.password === password)==false)
      this.user_exist=false
    else 
    this.join.user_logged=true;

    return this.join.users.some(user => user.username === username && user.password === password);
  }
 

  onSubmit() {
    if (this.username && this.password) {
      alert(`Welcome, ${this.username}!`);
      // Logic for authentication goes here
    } else {
      alert('Please enter both username and password.');
    }
  }
  constructor (private join:JoinService)
  {}
  showCreateAccount()
  {
    this.join.show_create_account=!this.join.show_create_account;
  }
  showlogin()
  { if (this.checkUserExists(this.username, this.password))
    this.join.shown=!this.join.shown
  }



}
