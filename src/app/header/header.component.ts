import { Component, OnInit } from '@angular/core';
import { JoinService } from '../join.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  component_choice = '';

  constructor(public join: JoinService) {}

  ngOnInit() {
    this.join.init(); // Initialize localStorage value
    console.log('Loaded Component:', this.join.currentComponent);
  }

  navigate(choice: string) {
    this.join.currentComponent = choice; // Persist choice in localStorage
    console.log('Navigated to:', this.join.currentComponent);
  }

  showCreateAccount() {
    this.join.show_create_account = false;
  }

  show_login() {
    this.join.shown = !this.join.shown;
  }

  show_add() {
    this.join.showadd = !this.join.showadd;
  }
  show_delete()
  {
    this.join.showdelete=!this.join.showdelete;
  }
}
