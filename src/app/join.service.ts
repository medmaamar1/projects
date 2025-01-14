import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JoinService {
  private _currentComponent: string = '';

  constructor() {}

  // Initialize currentComponent after service is created
  init() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this._currentComponent = localStorage.getItem('currentComponent') || '';
    }
  }

  get currentComponent(): string {
    return this._currentComponent;
  }

  set currentComponent(value: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      this._currentComponent = value;
      localStorage.setItem('currentComponent', value);
      console.log('Current Component set to:', value);
    }
  }

  user_logged = false;
  showadd = false;
  shown = false;
  show_create_account = false;

  public users: { username: string; password: string }[] = [];
  public today_menu: { name: string; img: string; type: string }[] = [];
  public chefs: { chefname: string; img: string; speciality: string; role: string }[] = [];
  public ratedishes: { dishname: string; img: string; comment: string }[] = [];
}
