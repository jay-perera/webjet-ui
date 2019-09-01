import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviePreview } from '../Models/MoviePreview';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieDetail } from '../Models/MovieDetail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExternalMovieService {
  private movies = new BehaviorSubject<MoviePreview[]>(null);
  private movieDetail = new BehaviorSubject<MovieDetail>(null);

  public Movies: Observable<MoviePreview[]> = this.movies.asObservable();
  public Movie: Observable<MovieDetail> = this.movieDetail.asObservable();

  constructor(private httpClient: HttpClient) {}

  getMovies(): MoviePreview[] {
    return this.movies.value;
  }

  setMovies(val: MoviePreview[]) {
    this.movies.next(val);
  }

  getMovieDetail(): MovieDetail {
    return this.movieDetail.value;
  }

  setMovieDetail(val: MovieDetail) {
    this.movieDetail.next(val);
  }

  public fetchMovies() {
    this.httpClient.get<MoviePreview[]>(environment.getMoviePreviewApi).subscribe(
      m => {
        this.setMovies(m);
      },
      error => {
        console.error('fetchMovies return error');
      }
    );
  }

  public fetchMovieDetail(id: string) {
    this.httpClient.get<MovieDetail>(environment.getMovieDetailApi + id).subscribe(
      m => {
        this.setMovieDetail(m);
      },
      error => {
        console.error('fetchMovieDetail return error');
      }
    );
  }
}
