import Title from './components/Title/Title';
import './App.css';
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search';

function App() {
  return (
    <div >
      <div className="main">
        <Title />    
        <Search />
        < Footer />
      </div>
    </div>
  );
}

export default App;
