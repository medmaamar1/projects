import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  message_attirant="Enjoy a 20% discount on all desserts today!"

}
