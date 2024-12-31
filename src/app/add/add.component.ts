import { Component } from '@angular/core';
import { JoinService } from '../join.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({ 
  standalone: true,
  imports: [FormsModule,CommonModule],
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  public name: string = '';
  public img: string = '';
  public type: string = ''; // For `today_menu`
  public speciality: string = ''; // For `chefs`
  public role: string = ''; // For `chefs`
  public comment: string = ''; // For `ratedishes`

constructor(public join:JoinService){}

  addItem() {
    if (this.join.currentComponent === 'today_menu') {
      this.join.today_menu.push({ name: this.name, img: this.img, type: this.type });
    } else if (this.join.currentComponent === 'chefs') {
      this.join.chefs.push({ chefname: this.name, img: this.img, speciality: this.speciality, role: this.role });
    } else if (this.join.currentComponent === 'ratedishes') {
      this.join.ratedishes.push({ dishname: this.name, img: this.img, comment: this.comment });
    }
  }
}
