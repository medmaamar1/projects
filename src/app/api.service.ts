import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5000/api'; // Base URL for your Flask API

  constructor(private http: HttpClient) {}

  // Get all dishes
  getDishes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/dishes`);
  }

  addDataToCollection(collectionName: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${collectionName}`, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Generic method to fetch data from a collection
  getDataFromCollection(collectionName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${collectionName}`);
  }


  // Additional API calls can go here
}
