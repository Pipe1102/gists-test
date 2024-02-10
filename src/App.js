import { useState } from "react";
import { fetchGists } from "./api";
import { usePagination } from "./hooks/usePagination";
import Gist from "./components/Gist";
import Footer from "./components/Footer";
import "./App.css";
import { getTotalPages } from "./utils";
import Header from "./components/Header";

const count = 30;
function App() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const totalNumberOfPages = getTotalPages();

  const { results, loading, total } = usePagination(count, page, fetchGists);

  const canNextPage = () => {
    const currentPage = page + 1;
    const lastPage = Math.ceil(total / count);
    return currentPage !== lastPage;
  };
  const canPrevPage = () => {
    return page !== 1;
  };

  const handleSelected = (id, image) => {
    setSelected(id);
    setSelectedImage(image);
    setTimeout(() => setSelectedImage(false), 1000);
  };

  return (
    <div className="App">
      <Header />
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="gistList">
          {results &&
            results.map((gist, ind) => (
              <div
                key={ind}
                onClick={() => handleSelected(gist.id, gist.owner.avatar_url)}
              >
                <Gist gist={gist} selected={selected} />
              </div>
            ))}
        </div>
      )}
      {!loading && (
        <Footer
          page={page}
          setPage={setPage}
          canNextPage={canNextPage}
          canPrevPage={canPrevPage}
          totalNumberOfPages={totalNumberOfPages}
        />
      )}
      {selectedImage && (
        <div className="fadeImage">
          <img src={selectedImage} alt="fade avatar" />
        </div>
      )}
    </div>
  );
}

export default App;
