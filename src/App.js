//import './App.css';
import Home from "./components/Home";
import MoviesDetails from "./components/MoviesDetails";
//import MoviesDetails from "./components/MoviesDetails";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center">
      <BrowserRouter>
        <Home />
      </BrowserRouter>

      <MoviesDetails />
    </main>
  );
};

export default App;
