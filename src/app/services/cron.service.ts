import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CronJob } from '../models/cronjob';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };


@Injectable({
  providedIn: 'root'
})
export class CronService {

  apiAddURL : string ='http://127.0.0.1:8000/addJob';
  apiAllURL : string ='http://127.0.0.1:8000/JobList';
  apiDeleteURL : string ='http://127.0.0.1:8000/DeleteJob'; 
  apiGetURL : string='http://127.0.0.1:8000/getJob';
  apiUpdateURL : string ='http://127.0.0.1:8000/UpdateJob';

  constructor(private http:HttpClient) { }

  CronJobsList(): Observable<CronJob[]> {
    return this.http.get<CronJob[]>(this.apiAllURL);
   
    }

  
   getCronJobByName(name: string) : Observable<CronJob> {
      return this.http.get<CronJob>(`${this.apiGetURL}/${name}`);
      //`${this.baseURL}/${id}`
    }

    addCronJob(cronjob : CronJob) : Observable<CronJob> {

      return this.http.post<CronJob>(`${this.apiAddURL}`, cronjob,httpOptions);
    }

    updateCronJob(cronjob : CronJob  , name: string): Observable<any> { 
      return this.http.put(`${this.apiUpdateURL}/${name}`, cronjob, { responseType: 'text' });
    }

    deleteCronJob(name: string): Observable<any> {
     
      return this.http.delete(`${this.apiDeleteURL}/${name}`, { responseType: 'text' });
    }

}
