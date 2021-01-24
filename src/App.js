import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

import ImageCard from "./components/image-card/image-card.component";
import SearchBox from "./components/search-box/search-box.component";
import NotFound from "./img/notfound.svg";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <React.StrictMode>
          <div className="hero">
            <div className="center">
              <h1 className="hero-text">
                The best free stock photos & videos shared by talented creators.
              </h1>
              <SearchBox searchText={(text) => setTerm(text)} />
            </div>
          </div>
          {!isLoading && images.length === 0 && (
            <img className="not-found" src={NotFound} />
          )}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((image) => (
              <ImageCard image={image} key={image.id} />
            ))}
          </Masonry>
        </React.StrictMode>
      )}
    </div>
  );
}

export default App;
