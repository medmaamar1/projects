import { Component } from '@angular/core';
import { JoinService } from '../join.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'], // Ensure styleUrls is correctly spelled
})
export class DeleteComponent {
  public itemToDelete: string = ''; // Name of the item to delete
  public deleteStatus: string = ''; // Status message for user feedback

  constructor(public join: JoinService) {}
  deleteItem() {
    let arrayToModify;

    if (this.join.currentComponent === 'today_menu') {
      arrayToModify = this.join.today_menu;
      this.join.today_menu = arrayToModify.filter(item => item.name !== this.itemToDelete);
    } else if (this.join.currentComponent === 'chefs') {
      arrayToModify = this.join.chefs;
      this.join.chefs = arrayToModify.filter(chef => chef.chefname !== this.itemToDelete);
    } else if (this.join.currentComponent === 'ratedishes') {
      arrayToModify = this.join.ratedishes;
      this.join.ratedishes = arrayToModify.filter(dish => dish.dishname !== this.itemToDelete);
    } else {
      this.deleteStatus = 'No valid component selected.';
      return;
    }

    // Provide feedback to the user
    const deleted = arrayToModify.some(item => {
      if ('name' in item) {
        return item.name === this.itemToDelete;
      } else if ('chefname' in item) {
        return item.chefname === this.itemToDelete;
      } else if ('dishname' in item) {
        return item.dishname === this.itemToDelete;
      }
      return false;
    });

    if (deleted) {
      this.deleteStatus = "${this.itemToDelete}" was successfully deleted.;
    } else {
      this.deleteStatus = "${this.itemToDelete}" not found in the list.;
    }

    // Clear the input field
    this.itemToDelete = '';
  }

}