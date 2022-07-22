const API_KEY = "43c26dd0108a6ee5e0785a807195044c";
const API_BASE = "https://api.themoviedb.org/3";

async function basicFetch(endpoint) {
  const req = await fetch(`${API_BASE}${endpoint}`);
  return req.json();
}

async function getHomeList() {
  return [
    {
      slug: "originals",
      title: "Originais do Netflix",
      items: await basicFetch(
        `/discover/tv?with_netword=213&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Recomendados para você",
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "toprated",
      title: "Em alta",
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "action",
      title: "Ação",
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentários",
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      ),
    },
  ];
}

async function getMovieInfo(movieId, type) {
  let info = {};

  if (movieId) {
    switch (type) {
      case "movie":
        info = await basicFetch(
          `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      case "tv":
        info = await basicFetch(
          `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
        );
        break;

      default:
        break;
    }
  }

  return info;
}
export { getHomeList, getMovieInfo };
