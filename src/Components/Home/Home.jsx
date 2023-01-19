import React from 'react'
import mainImage from '../../Images/mainImage.png'; 
import './home.css';
import ship from '../../Images/ship.jpg'
import plane from '../../Images/plane.jpg'
import truck from '../../Images/truck.jpg'
import forwarding from  '../../Images/forwarding.jpg'
import courier from '../../Images/courier.jpg'
import customer from '../../Images/customer.jpg'
import slide1 from '../../Images/slide1.jpg'
import slide2 from '../../Images/slide2.jpg'
import shipmain from '../../Images/shipmain.jpg'
import icon3 from '../../Images/newlogo.png'
import logo from '../../Images/logo.jpg'
import car1 from '../../Images/car1.jpeg'
import car2 from '../../Images/car2.png'
import { Link } from 'react-router-dom';

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img src={mainImage} id="mainimage" className="d-inline-block align-top" alt=""/>
      <div id='welcome'>
        <div id='header'>
          <h1 id='text' className='display-1'>Excellent Services for Your Logistics</h1>
          <p id='text'>we offer comprehensive import/export, freight forwarding and logistical management solutions to importers and exporters around South Africa.</p>
          
          <div className='container'>
            <div id='mycarousel' className=''>
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img id='pics' className="rounded-10 mx-auto d-block w-50" src={slide1} alt="First slide"/>
                        <div class="carousel-caption d-none d-md-block">
                          <h5 id='captions'>We do all</h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img id='pics' className="rounded-10 mx-auto d-block w-50" src={slide2} alt="Second slide"/>
                        <div class="carousel-caption">
                          <h5 id='captions'>Our Motto</h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img id='pics' className="rounded-10 mx-auto d-block w-50" src={plane} alt="Third slide"/>
                        <div class="carousel-caption">
                          <h5 id='captions mt-5'>Air Freight</h5>
                        </div>
                    </div>
                    <div id='truckdiv' className="carousel-item" data-bs-interval="10000">
                        <img id='pics' className="truck rounded-10 mx-auto d-block " src={car1} alt="Third slide"/>
                        <div class="carousel-caption">
                          <h5 id='captions mt-5'>Road Freight</h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img id='pics' className="rounded-10 mx-auto d-block w-50" src={courier} alt="Third slide"/>
                        <div class="carousel-caption">
                          <h5 id='captions'>Courier Services</h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img id='pics' className="rounded-10 mx-auto d-block w-50" src={ship} alt="Third slide"/>
                        <div class="carousel-caption">
                          <h5 id='captions mt-5'>Sea Freight</h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img id='pics' className="rounded-10 mx-auto d-block w-50" src={customer} alt="Third slide"/>
                        <div class="carousel-caption">
                          <h5 id='captions'>Customer Clearing</h5>
                        </div>
                    </div>
                    
                    <div className="carousel-item" data-bs-interval="10000">
                        <img id='pics' className="rounded-10 mx-auto d-block w-50" src={forwarding} alt="Third slide"/>
                        <div class="carousel-caption">
                          <h5 id='captions'>Freight Forwarding services</h5>
                        </div>
                    </div>
                    
                    <div className="carousel-item" data-bs-interval="20000">
                        <img id='pics' className="rounded-10 mx-auto d-block w-50" src={icon3} alt="First slide"/>
                        <div class="carousel-caption d-none d-md-block">
                          <h5 id='captions'></h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="20000">
                        <img id='pics' className="truck rounded-10 mx-auto d-block w-50" src={logo} alt="First slide"/>
                        <div class="carousel-caption d-none d-md-block">
                          <h5 id='captions'></h5>
                        </div>
                    </div>
                    
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span class="carousel-control-next-icon dark" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link to={'/Contact'} id='btncontact' className='btn'>Get in Touch</Link>
        </div>
        <div >
          <img id='vid' src={shipmain} alt='' />
        </div>

        
      </div>
      
      
     
    </div>
    
  )
}
