import { Component, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/Models/MovieDetail';
import { ExternalMovieService } from 'src/app/Services/external-movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  public movieDetail: MovieDetail;
  public hasAwards: boolean;
  public hasMovieDetail: boolean;
  public isLoading: boolean;

  private currentId: string;

  constructor(private externalMovieService: ExternalMovieService, private route: ActivatedRoute) {
    this.movieDetail = null;
    this.hasAwards = false;
    this.hasMovieDetail = false;
    this.isLoading = false;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentId = params.id;
      this.isLoading = true;
      this.fetchMovieDetail(params.id);
    });

    this.externalMovieService.Movie.subscribe(movie => {
      if (movie) {
        if (movie.id === this.currentId) {
          this.isLoading = false;
          if (movie) {
            this.hasMovieDetail = true;
            this.movieDetail = movie;
            this.hasAwards = movie.awards !== null && movie.awards !== '';
          } else {
            this.hasMovieDetail = false;
            this.movieDetail = movie;
          }
        }
      } else {
        this.hasMovieDetail = false;
        this.isLoading = false;
      }
    });
  }

  onRefresh() {
    this.fetchMovieDetail(this.route.snapshot.params.id);
  }

  private fetchMovieDetail(id: string) {
    this.isLoading = true;
    this.externalMovieService.fetchMovieDetail(id);
  }
}
