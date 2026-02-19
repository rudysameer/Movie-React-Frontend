
import './App.css'
import MovieCard from './components/MoiveCard';

function App() {

  return (
    <>
    <MovieCard movie={{title:"Titanic", releaseDate:"1997"}} />
    <MovieCard movie={{title:"Inception", releaseDate:"2010"}} />
    <MovieCard movie={{title:"3 idiots", releaseDate:"2008"}} />


    </>
  );
}

export default App
