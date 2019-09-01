export class MoviePreview {
  public title: string;
  public year: string;
  public id: string;
  public type: string;
  public poster: string;
  public isSelected: boolean;

  constructor(title: string, year: string, id: string, type: string, poster: string) {
    this.id = id;
    this.poster = poster;
    this.title = title;
    this.year = year;
    this.type = type;
    this.isSelected = false;
  }
}
