import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { API_URL } from '../config';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  fechaActualV = new Date();
  fechaA: any;
  contador: number=0;

  fechaeditada: any;
  
  cookieValue: any;

  private urlBa = API_URL;

  user = { "vista": false, "edicion": false };


  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.cookieValue = this.cookieService.get('miCookie');
  }

  obtenerdatos(): Observable<any> {
    return this.http.get('./assets/data/data.json')

  }

  saveCookie() {
    this.cookieService.set('users', "");
  }

  public getDatos(url: string): Observable<any> {
    return this.http.get(this.urlBa + url);
  }

  public editarDatos(url: string, body: any): Observable<any> {
    if (this.contador==0) {
      this.editFecha();
    }
    return this.http.put(this.urlBa + url, body);
  }

  public crearDatos(url: string, body: any): Observable<any> {
    this.editFecha();
    return this.http.post(this.urlBa + url, body);
  }

  public eliminarDatos(url: string): Observable<any> {
    this.editFecha();
    return this.http.delete(this.urlBa + url);
  }

  /*   public validador(){ 
      return true;
      
    } */

  iniciarSesion(credenciale: any): Observable<any> {
    return this.http.post(this.urlBa + "user/login", credenciale);
  }

  crearSesion(credenciale: any): Observable<any> {
    return this.http.post(this.urlBa + "user/crear", credenciale);
  }

  public editFecha() {
    this.getDatos("personas/traer").subscribe(respuesta => {
      this.fechaeditada = respuesta[0];
      this.fechaeditada.info = this.fechaActualV;
      this.contador = 1;
      this.editarDatos("personas/editar/1", this.fechaeditada).subscribe(respuesta => {
      });
    });

  }

  public validadors() {
    return this.user;

  }

  public infouser(user: any) {
    if (user.admin == true && user.admin != "") {
      this.user.vista = true;
      this.user.edicion = true;
      this.cookieService.set('users', JSON.stringify(this.user));
    } else if (user.admin == false) {
      this.user.vista = true;
      this.user.edicion = false;
    }
  }

}
