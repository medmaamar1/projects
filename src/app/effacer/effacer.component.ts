import { Component } from '@angular/core';
import { JoinService } from '../join.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule,CommonModule],
  selector: 'app-effacer',
  templateUrl: './effacer.component.html',
  styleUrls: ['./effacer.component.css']
})
export class EffacerComponent {
  public name: string = '';


  constructor(public join:JoinService) {}

  removeItem(): void {
    if (this.join.currentComponent === 'today_menu') {
      this.join.today_menu = this.join.today_menu.filter(item => item.name !== this.name);
    } else if (this.join.currentComponent === 'chefs') {
      this.join.chefs = this.join.chefs.filter(item => item.chefname !== this.name);
    } else if (this.join.currentComponent === 'ratedishes') {
      this.join.ratedishes = this.join.ratedishes.filter(item => item.dishname !== this.name);
    }

    // Clear input field after removal
    this.name = '';
  }
}

