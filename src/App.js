import { useEffect, useState } from "react";
import "./App.css";
import MovieRow from "./components/movieRow";
import FeaturedMovie from "./components/featuredMovie";
import { getHomeList, getMovieInfo } from "./tmdb";
import Header from "./components/header";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [isBlack, setIsBlack] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      setMovieList(list);

      const originals = list.filter((element) => {
        return element.slug === "originals";
      });

      const randomNumber = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const chosenOriginal = originals[0].items.results[randomNumber];
      const chosenInfo = await getMovieInfo(chosenOriginal.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = (event) => {
      if (window.scrollY > 10) {
        setIsBlack(true);
      } else {
        setIsBlack(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header isBlack={isBlack} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((element, key) => {
          return (
            <MovieRow key={key} title={element.title} items={element.items} />
          );
        })}
      </section>

      <footer>
        Feito com
        <span role="img" arial-label="coração">
          💚
        </span>
        por @allandlobr
        <br />
        Nao possuo nenhum direito sobre nenhum material usado nesse projeto.
        <br />
        Projeto desenvolvido com único propósito de estudo.
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            alt="Loading gif"
            src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif"
          />
        </div>
      )}
    </div>
  );
}

export default App;
