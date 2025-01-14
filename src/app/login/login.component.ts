import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  user_exist = true;

  constructor(private join: JoinService) {}

  ngOnInit(): void {
    // Check if the user is already logged in when the component is initialized
    if (this.join.user_logged) {
      console.log('User is already logged in');
    }
  }

  // Check if the user exists in the users list and set login state
  checkUserExists(username: string, password: string): boolean {
    const user = this.join.users.find(user => user.username === username && user.password === password);

    if (user) {
      // User found, set login state to true and persist in localStorage
      this.join.user_logged = true;
      return true;
    } else {
      // User not found
      this.user_exist = false;
      return false;
    }
  }

  onSubmit() {
    if (this.username && this.password) {
      // Check if the user exists
      if (this.checkUserExists(this.username, this.password)) {
        alert(`Welcome, ${this.username}!`);
        // Additional logic on successful login, like redirecting or showing the main page
      } else {
        alert('Incorrect username or password.');
      }
    } else {
      alert('Please enter both username and password.');
    }
  }

  showCreateAccount() {
    this.join.show_create_account = !this.join.show_create_account;
  }

  showlogin() {
    if (this.checkUserExists(this.username, this.password)) {
      this.join.shown = !this.join.shown; // Toggle login form visibility
    }
  }
}

