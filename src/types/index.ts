export interface MovieShort {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface MovieDetails extends MovieShort {
  Genre: string;
  Plot: string;
}

export interface OMDbSearchResponse {
  Search: MovieShort[];
  totalResults: string;
  Response: string;
  Error?: string;
}
