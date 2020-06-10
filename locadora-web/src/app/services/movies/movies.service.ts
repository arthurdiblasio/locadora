import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie';
import { take } from 'rxjs/operators';


const URL = environment.servicesURL;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    return this.http.get<Array<Movie>>(`${URL}movies`)
      .toPromise();
  }

  removeMovie(id: string) {
    return this.http.delete(`${URL}movies/${id}`)
      .toPromise();
  }

  findById(id: string) {
    return this.http.get<Movie>(`${URL}movies/${id}`).pipe(take(1));
  }

  criarMovie(movie) {
    delete movie.id;
    return this.http.post(`${URL}movies`, movie)
      .toPromise();
  }

}
