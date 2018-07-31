export class Movie {
    public Note: string = "No Notes."    
    constructor(
        public Title: string,
        public Released: string,
        public Rated: string,
        public Runtime: string,
        public Genre: string,
        public Director: string,
        public Plot: string,
        public Poster: string,
        public imdbRating: string,
        public imdbID: string,
        public Production: string,
    ) {}
}