import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
