export default class Services {
  API_KEY = '3ceeb33c';
  BASE_URL = `https://www.omdbapi.com/?apikey=${this.API_KEY}`;

  searchMovies = async (title) => {
    try {
      const response = await fetch(`${this.BASE_URL}&s=${title}`);
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  getMovieDetails = async (id) => {
    try {
      const response = await fetch(`${this.BASE_URL}&i=${id}`);

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };
}
