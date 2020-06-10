import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { RatingsService } from '../../services/ratings/ratings.service';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _movies: Array<Movie> = Array<Movie>();
  movies: Array<Movie> = Array<Movie>();
  movieSearch = '';
  moviesFiltrados = false;
  arrayListados = [];
  movieExcluir = '';
  ratings: any = [];
  categories: any = [];
  loading = false;

  constructor(
    private moviesService: MoviesService,
    private ratingsService: RatingsService,
    private categoriesService: CategoriesService,
  ) {

  }

  ngOnInit() {
    this.loading = true;
    this.getRatings();
  }

  getRatings() {
    this.ratingsService.getRatings().then(ratings => {
      this.ratings = ratings;
      this.getCategories();
    })
      .catch(error => {
        this.loading = false;
        console.log(error);

      });
  }

  getCategories() {
    this.categoriesService.getCategories().then(categories => {
      this.categories = categories;
      this.getMovies();
    })
      .catch(error => {
        this.loading = false;
        console.log(error);

      });
  }

  getMovies() {
    this.moviesService.getMovies().then(movies => {
      this._movies = movies;
      this.movies = movies;
      this.loading = false;

    })
      .catch(error => {
        this.loading = false;
        console.log(error);

      });
  }

  getNameCategory(category_id: number) {
    return this.categories.find(category => category.id === category_id).name;
  }

  getNameRating(rating_id: number) {
    return this.ratings.find(rating => rating.id === rating_id).name;
  }


  search() {


    if (this.movieSearch === '') {
      this.movies = [...this._movies];
      this.moviesFiltrados = false;
      return;
    }

    this.movies = this._movies.filter(movie => {
      movie.name.toUpperCase().includes(this.movieSearch.toUpperCase());
    });
    this.moviesFiltrados = true;
  }

  exibirInfo(id: string) {
    const listado = this.arrayListados.indexOf(id);
    return listado === -1 ? false : true;
  }

  leiaMais(id: string) {
    const index = this.arrayListados.indexOf(id);
    if (index === -1) {
      this.arrayListados.push(id);
    } else {
      this.arrayListados.splice(index, 1);
    }

  }

  removeMovie(id: string) {
    this.moviesService.removeMovie(id).then(res => {
      this.getMovies();
    }).catch(err => {
    });
  }


}
