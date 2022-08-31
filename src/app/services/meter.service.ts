import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meter } from '../models/meter';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class MeterService {

  apiAddURL : string ='http://127.0.0.1:8000/addMeter';
  apiAllURL : string ='http://127.0.0.1:8000/getAllMeters';
  apiDeleteURL : string ='http://127.0.0.1:8000/deleteMeter'; 
  apiGetURL : string='http://127.0.0.1:8000/getMeter';
  apiUpdateURL : string ='http://127.0.0.1:8000/updateMeter';


  constructor(private http:HttpClient) { }

  MetersList(): Observable<Meter[]> {
    return this.http.get<Meter[]>(this.apiAllURL);
   
    }

    getMeterByID(id: number) : Observable<Meter> {
      return this.http.get<Meter>(`${this.apiGetURL}/${id}`);
      //`${this.baseURL}/${id}`
    }


    addMeter(meter : Meter) : Observable<Meter> {

      return this.http.post<Meter>(`${this.apiAddURL}`, meter,httpOptions);
    }

    updateMeter(meter : Meter  , id:number ): Observable<any> { 
      return this.http.put(`${this.apiUpdateURL}/${id}`, meter, { responseType: 'text' });
    }
  
    deleteMeter(id: number): Observable<any> {
     
        return this.http.delete(`${this.apiDeleteURL}/${id}`, { responseType: 'text' });
      }
  








}
