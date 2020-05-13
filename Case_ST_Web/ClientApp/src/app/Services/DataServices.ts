import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class DataServices {
  protected baseUrl: string = "https://localhost:44370/api";

    constructor(
        private httpClient: HttpClient
    ) {


  }

  private GetHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    }

  }

  Deneme() {
    return this.httpClient.get(this.baseUrl + '/Main/Deneme', this.GetHeader());
  }
  GetMenu() {
    return this.httpClient.get(this.baseUrl + '/Main/GetMenus', this.GetHeader());
  }
}
