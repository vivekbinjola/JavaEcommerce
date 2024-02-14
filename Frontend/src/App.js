import logo from './logo.svg';
import './App.css';
import NavBar from './customer/components/Navigation/NavBar';
import HomeCarousel from './customer/components/Carousel/HomeCarousel';
import HomePage from './customer/Pages/HomePage';
import HomeCard from './customer/components/HomeCard/HomeCard';
import Footer from './customer/components/Footer/Footer';

function App() {
  return (
    <h1 >
       <NavBar />
       <HomePage />
       <Footer/>
    
    </h1>
  );
}

export default App;
