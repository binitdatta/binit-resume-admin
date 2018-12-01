import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CareerSummaryService {
 
    private baseUrl = 'http://localhost:8080/binitdatta/dynamicresume/api/careersummary';
   
    constructor(private http: HttpClient) { }
   
  
   
    getCareerSummaryList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
   
    createCareerSummary(careerSummary: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, careerSummary);
      }
  
  }