import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviePreview } from 'src/app/Models/MoviePreview';
import { Router, ActivatedRoute } from '@angular/router';

export interface IMovieSelectedEvent {
  id: string;
  isSelected: boolean;
}
@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {
  @Input() inputMovie: MoviePreview;
  @Output() selectionChanged = new EventEmitter<IMovieSelectedEvent>();

  public movieId = '';
  public onSourceImageError: (event: any) => void;
  constructor(public router: Router, public route: ActivatedRoute) {
    this.onSourceImageError = (event: any) => {
      event.target.src = 'http://via.placeholder.com/100x150';
    };
  }

  ngOnInit() {
    this.movieId = this.inputMovie.id;
  }

  onMovieCardClick() {
    const selected = !this.inputMovie.isSelected;
    this.selectionChanged.emit({
      id: this.inputMovie.id,
      isSelected: selected
    });
  }
}
