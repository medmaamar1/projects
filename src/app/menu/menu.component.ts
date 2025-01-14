import { Component } from '@angular/core';
import { JoinService } from '../join.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(public join:JoinService)
  {  }
  idiot() {
    console.log("vrai");
    console.log(this.join.today_menu); // Log in ngOnInit to ensure data is available
    console.log('This is a test log');
  }
 

}



