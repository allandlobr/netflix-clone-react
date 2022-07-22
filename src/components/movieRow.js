import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useState } from "react";
import "./movieRow.css";

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-100);

  function onLeftArrow(event) {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function onRightArrow(event) {
    const listWidth = (items.results.length * 150);
    let x = scrollX - Math.round(window.innerWidth / 2);
    if (x < (window.innerWidth - listWidth)) {
      x = (window.innerWidth - listWidth) - 60
    }
    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={onLeftArrow}>
        <NavigateBefore />
      </div>
      <div className="movieRow--right" onClick={onRightArrow}>
        <NavigateNext />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((element, key) => (
              <div className="movieRow--item">
                <img
                  key={key}
                  alt={element.original_title}
                  src={`https://image.tmdb.org/t/p/w300${element.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
