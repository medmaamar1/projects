import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JoinService } from '../join.service';

@Component({
  selector: 'app-chef',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './chef.component.html',
  styleUrl: './chef.component.css'
})
export class ChefComponent {
  constructor(public join:JoinService){}
  

}
