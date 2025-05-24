import './styles/App.css';
import Header from './major_elem/Header';
import Explore from './major_elem/Explore';
import Catalog from './major_elem/Catalog';
import Collections from './major_elem/Collections';

function App() {
  return (
    <div className="App">
        <Header />
        <Explore />
        <Catalog />
        <Collections />
    </div>
  );
}

export default App;
