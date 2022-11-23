import { originals, action, ComedyMovies } from "./ulrs";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Banner />
      <RowPost url={originals} title="Netflix_Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={ComedyMovies} title="Comedy" isSmall />
    </div>
  );
}

export default App;
