import Header from './components/Header';
import { useEffect }  from 'react';
import HeroCards from './components/HeroCards';
import "./components/HeroesCards.css";
import { data } from './components/Data-main';

function App() {
  useEffect(() => { 
    document.title = "Heroes Cards";
  }, []);
  
  return (
    <div className="container-main">
       <Header />
       <HeroCards data={ data} />
    </div>
  );
}

export default App;
