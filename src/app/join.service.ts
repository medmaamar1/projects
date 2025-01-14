import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JoinService {
  public backgrounds: { component: string, backgroundUrl: string }[] = [
    {
      component: 'welcome-page',
      backgroundUrl: 'url("https://images.unsplash.com/photo-1592466741848-20145fe5d6d7?q=80&w=1934&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
    },
    {
      component: 'today_menu',
      backgroundUrl: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
    },
    {
      component: 'ratedishes',
      backgroundUrl: 'url("https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
    },
    {
      component: 'chefs',
      backgroundUrl: 'url("https://plus.unsplash.com/premium_photo-1683707120070-0c8c77bf44b6?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
    }
  ];
  getBackground(component: string): string {
    const background = this.backgrounds.find(b => b.component === component);
    return background ? background.backgroundUrl : ''; }// Default to empty string if not found
    
  // Get the background image URL for a specific component
  private _currentComponent: string = '';
  
  // Initialize persistent login state
  private _user_logged: boolean = false;

  constructor() {
    this.init(); // Ensure data is initialized when the service is created
  }

  init() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this._currentComponent = localStorage.getItem('currentComponent') || '';
      const storedLoggedInState = localStorage.getItem('user_logged');
      this._user_logged = storedLoggedInState === 'true'; // Convert to boolean
    }
  }

  // Getter and setter for currentComponent
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

  // Persistent user login state
  get user_logged(): boolean {
    return this._user_logged;
  }

  set user_logged(value: boolean) {
    this._user_logged = value;
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('user_logged', value.toString()); // Store as a string in localStorage
      console.log('User logged state set to:', value);
    }
  }
  showdelete=false;
  showadd = false;
  shown = false;
  show_create_account = false;

  public users: { username: string; password: string }[] = [];
  public today_menu: { name: string; img: string; type: string }[] = [];
  public chefs: { chefname: string; img: string; speciality: string; role: string }[] = [];
  public ratedishes: { dishname: string; img: string; comment: string }[] = [];
}
