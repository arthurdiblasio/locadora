import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/photo';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { RatingsService } from 'src/app/services/ratings/ratings.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  editando = false;
  loadEmitter: any;
  event: any;
  ratings: any = [];
  categories: any = [];

  movieForm: FormGroup = this.formBuilder.group({
    id: [null],
    name: [null, [Validators.required, Validators.min(2)]],
    poster: ['poster'],
    cast: [[], Validators.required],
    category_id: [null, Validators.required],
    synopsis: [null, Validators.required],
    rating_id: [null, Validators.required],
  });
  totalBytes: any;
  percentBytesTransferred: string;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private ratingsService: RatingsService,
    private categoriesService: CategoriesService,

  ) { }

  ngOnInit(): void {
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
      this.verificarParametros();
    })
      .catch(error => {
        this.loading = false;
        console.log(error);

      });
  }



  verificarParametros() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.moviesService.findById(params['id']).subscribe(movie => {
          console.log(movie);
          this.parseObjToForm(movie);
          this.editando = true;
        });
      } else {
        this.editando = false;
      }
      this.loading = false;
    });
  }

  parseFormToObj() {
    const form = this.movieForm.value,
      movie: Movie = form as Movie;


    return movie;
  }

  parseObjToForm(movie) {
    console.log(movie);
    this.movieForm = this.formBuilder.group({
      id: [movie.id],
      name: [movie.name],
      poster: ['poster'],
      cast: [movie.cast],
      rating_id: [movie.rating_id],
      synopsis: [movie.synopsis],
      category_id: [movie.category_id]
    });
  }


  saveMovie() {
    // const movie = this.parseFormToObj();
    const movie = {
      "name": "Os carcereiros", "category_id": 10, "synopsis": "Esse é o filme", "rating_id": 3, "poster": "teste", "cast": "arthur, eduardo"
    };
    this.moviesService.criarMovie(movie);
  }

}
