import './styles/App.css';
import Header from './major_elem/Header';
import Explore from './major_elem/Explore';
import Catalog from './major_elem/Catalog';

function App() {
  return (
    <div className="App">
        <Header />
        <Explore />
        <Catalog />
    </div>
  );
}

export default App;
