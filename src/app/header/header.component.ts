import { Component } from '@angular/core';
import { JoinService } from '../join.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule,AddComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public join:JoinService)
  { 
    this.join.currentComponent=this.component_choice;
  }
  component_choice="";

  showCreateAccount()
  {
    this.join.show_create_account=false;
  }
  
  show_login()
  {
    this.join.shown=!this.join.shown;
  }

}
