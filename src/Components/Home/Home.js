
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";

function Home() {
  return (
    <div className="bg-black">
     
          <Banner />
          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row
            title="Documentaries Movies"
            fetchUrl={requests.fetchDocumentaries}
          />
       
    </div>
  );
}

export default Home;
