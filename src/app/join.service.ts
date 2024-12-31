import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoinService {
  currentComponent="";
  user_logged=false;
  shown=false;
  show_create_account=false;
  public users: { username: string; password: string }[]=[];
  public today_menu: { name: string; img: string ;type:string}[]=[];
  public chefs:{chefname:string;img:string;speciality:string;role:string}[]=[];
  public ratedishes:{dishname:string;img:string;comment:string}[]=[];
  constructor() {
   }
}
