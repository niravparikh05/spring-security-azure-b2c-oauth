import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private authorizeEndpoint = '/oauth2/authorization/advisor-app'
  private tokenEndpoint = '/login/oauth2/code/advisor-app'
  private baseUrl = environment.baseUrl
  private tokenKey = 'token'

  constructor(private httpClient : HttpClient) { }

  login() {
    window.open(this.baseUrl + this.authorizeEndpoint, '_self');
  }

  updateToken(token : string) {
    localStorage.setItem(this.tokenKey, token)
  }

  fetchToken(code : string, state : string) : Observable<any> {
    return this.httpClient.get(this.baseUrl + this.tokenEndpoint + '?code=' + code + '&state=' + state);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn() : boolean {
    const token = this.getToken();
    return token != null;
  }

}
