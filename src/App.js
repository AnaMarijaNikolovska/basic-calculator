import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import Header from './Header';
import { Navbar } from 'react-bootstrap';
import Photo from './1177136244533288258.jpg'

function App() {
  const bgStyle = {
    backgroundImage: `url(${Photo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'

  };
  return (
    <div className="App" style={bgStyle}>
      <Header/>
      <Calculator/>
    </div>
  );
}

export default App;
