import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gateway } from '../models/gateway';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class GatewayserviceService {

  apiAddURL : string ='http://127.0.0.1:8000/addGateway';
  apiGetURL : string='http://127.0.0.1:8000/getGateway';
  apiDeleteURL : string ='http://127.0.0.1:8000/deleteGateway'; 
  apiUpdateURL : string ='http://127.0.0.1:8000/updateGateway';



  constructor(private http:HttpClient) {

   }


   getGateway(): Observable<Gateway[]> {
    return this.http.get<Gateway[]>(this.apiGetURL);
   
    }


    addGateway(gateway : Gateway) : Observable<Gateway> {

      return this.http.post<Gateway>(`${this.apiAddURL}`, gateway,httpOptions);
    }


    updateGateway(gateway : Gateway  ): Observable<any> { 
      return this.http.put(`${this.apiUpdateURL}`, gateway, { responseType: 'text' });
    }



    deleteGateway(): Observable<any> {
     
      return this.http.delete(`${this.apiDeleteURL}`, { responseType: 'text' });
    }
}
