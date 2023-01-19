import './App.css';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/about';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path='/About' element={<About/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/' exact element={<Home/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
