import { Component, OnInit } from '@angular/core';
import { MoviePreview } from 'src/app/Models/MoviePreview';
import { ExternalMovieService } from 'src/app/Services/external-movie.service';
import { IMovieSelectedEvent } from '../movie-preview/movie-preview.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies: MoviePreview[];
  public selectedMovieId: string;

  constructor(private externalMovieService: ExternalMovieService) {}

  ngOnInit() {
    this.externalMovieService.fetchMovies();
    this.externalMovieService.Movies.subscribe(movie => {
      this.movies = movie;
    });
  }

  toggleSelection(model: IMovieSelectedEvent) {
    this.selectedMovieId = model.id;
    this.movies.forEach((element: MoviePreview) => {
      element.isSelected = element.id === model.id ? model.isSelected : false;
    });
  }
}
