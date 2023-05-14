import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url=""
  currentUserSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("El servicio corre she bien");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currenUser")||"{}"))
  }

  iniciarSesion(credenciale:any):Observable<any>{
    return this.http.post(this.url,credenciale).pipe(map(data=>{
      sessionStorage.setItem("currenUser", JSON.stringify(data));

      return data;
    }))
  }
}
