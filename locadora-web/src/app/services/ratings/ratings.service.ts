import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const URL = environment.servicesURL;


@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor(
    private http: HttpClient
  ) { }

  getRatings() {
    return this.http.get(`${URL}ratings`)
      .toPromise();
  }
}
