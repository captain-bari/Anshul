import logo from './logo.svg';
import './App.css';
import Routes from './components/Routes';
import Banner from './components/Banner';
import background from "./bg.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Banner />
      <Routes/>
    </div>
  );
}

export default App;
