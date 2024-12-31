import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JoinService } from '../join.service';



@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  constructor(public join:JoinService){}
  
  dishesByCategory = {
    Pizza: [
      { name: 'Margherita', image: 'path_to_image', rating: 0, comment: '' },
      { name: 'Pepperoni', image: 'path_to_image', rating: 0, comment: '' }
    ],
    Pasta: [
      { name: 'Carbonara', image: 'path_to_image', rating: 0, comment: '' },
      { name: 'Bolognese', image: 'path_to_image', rating: 0, comment: '' }
    ],
    Juices: [
      { name: 'Orange Juice', image: 'path_to_image', rating: 0, comment: '' },
      { name: 'Apple Juice', image: 'path_to_image', rating: 0, comment: '' }
    ]
  };


    hoveredRating: number = 0;  // Keeps track of the hovered star rating
    
    // Hover over a star
    hoverRating(star: number) {
      this.hoveredRating = star;  // Set the hovered rating value
    }
  
    // Reset hover effect
    resetHover() {
      this.hoveredRating = 0;  // Reset the hovered rating when the mouse leaves
    }
  
    // rateDish method (if needed for click handling)
    rateDish(dish: any, rating: number) {
      dish.rating = rating;
    }
  }
  




