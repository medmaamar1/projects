import { Component } from '@angular/core';
import { JoinService } from '../join.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  constructor(private join:JoinService)
  {}

  showCreateAccount()
  {
    if (this.password==this.confirm_password)
    this.join.show_create_account=!this.join.show_create_account;
  }
  confirm_password="";
  name="";
  password="";
  meme_password=true;

  confirmer_password()
  {
    if (!(this.password==this.confirm_password))
    {
      this.meme_password=false;
    }
    else
    this.join.users.push({username:this.name,password:this.password})

  }

}
