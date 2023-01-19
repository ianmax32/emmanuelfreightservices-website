import React from 'react'
import './services.css'
import ship from '../../Images/ship.jpg'
import plane from '../../Images/plane.jpg'
import truck from '../../Images/truck.jpg'
import forwarding from  '../../Images/forwarding.jpg'
import courier from '../../Images/courier.jpg'
import customer from '../../Images/customer.jpg'
import logo from '../../Images/logo.jpg'
import car2 from '../../Images/car2.png'

export default function Services() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='servicemain'>
        <h1 id='headingservices'>Our Services</h1>
        <div className='container'>
            <p>
            Emmanuel Freight Services is effectively staffed and equipped to handle all your exports, clearing and forwarding needs. Whether it’s by air sea or land we will handle every aspect of the exportation process to ensure that your exports arrive on time and where they need to be. We cover all the necessary bases ensuring that all of your requirements are met We also offer effective export, clearing and forwarding solutions. We have formed partnerships with all modus operators, which will ensure that your export requirements are seen to. These partnerships also ensure that delivery is made on time. From the moment you place the order we are involved and we offer a complete solution. Air freight is fast and efficient and in some cases can be cheaper than sending products by sea. To find out which method of transportation would be better suited to you and which one would be more cost effective, please contact us and we’ll give you a quote.
            </p>

            <div id='info' className='row mt-5 mb-5'>
                <div className='col p-5'>
                    <h3>EFS Foundation</h3>
                    <p>
                    Vision is to impact the world in support of people in Need, less privileged, Donations, Assistance in difficult situations.
                    </p>
                </div>
                <div id='found' className='col p-2'>
                    <img id='offer' className='rounded' src={logo} alt="" />
                </div>
            </div>

            <div id='info' className='row mt-5 mb-5'>
                <div  className='col p-5'>
                    <img id='offer' className='rounded-pill' src={plane} alt="" />
                </div>
                <div className='col p-5'>
                    <h3>Air Freight</h3>
                    <p>
                    Air freight/cargo can be defined as all cargo moved by air except for mail and passenger baggage. The two options for air cargo transport are dedicated freighters and belly capacity in passenger aircraft.
                    </p>
                </div>
            </div>


            <div id='info' className='row mt-5 mb-5'>
                
                <div className='col p-5'>
                    <h3>Sea Freight</h3>
                    <p>
                    Sea freight is a method of transporting large quantities of products via cargo ships. Goods are packed into containers and these containers are loaded onto a vessel, where they will be sailed to their destination country.
                    </p>
                </div>
                <div  className='col p-5'>
                    <img id='offer' className='rounded-pill' src={ship} alt="" />
                </div>
            </div>

            <div id='info' className='row mt-5 mb-5'>
                <div  className='col p-5'>
                    <img id='offer' className='rounded-pill' src={car2} alt="" />
                </div>
                <div className='col p-5'>
                    <h3>Road Freight</h3>
                    <p>
                    Road freight is the most flexible solution for the transport of goods. Unlike rail, air freight or sea freight, road freight can accommodate last-minute route or schedule changes. This is a notable benefit if your business regularly needs to make changes.
                    </p>
                </div>
            </div>

            <div id='info' className='row mt-5 mb-5'>
                <div className='col p-5'>
                    <h3>Courier Service</h3>
                    <p>
                    Courier services focuses on express and door-to-door delivery. Couriers may use self-owned, privately shared or public transportation to supply these services. Included are express delivery services, which might include, for example, on-demand pick-up or time-definite delivery.
                    </p>
                </div>
                <div  className='col p-5'>
                    <img id='offer' className='rounded-pill' src={courier} alt="" />
                </div>
            </div>

            <div id='info' className='row mt-5 mb-5'>
                <div  className='col p-5'>
                    <img id='offer' className='rounded-pill' src={forwarding} alt="" />
                </div>
                <div className='col p-5'>
                    <h3>Forwarding</h3>
                    <p>
                    Freight forwarding is the coordination and shipment of goods from one place to another via a single or multiple carriers via air, marine, rail or highway.
                    </p>
                </div>
            </div>

            <div id='info' className='row mt-5 mb-5'>
                <div className='col p-5'>
                    <h3>Customer Clearing</h3>
                    <p>
                    The documents that accompany your shipment become the 'voice' of the shipment. Your goods will be classified, processed and inspected by the clearing agents and customs officials based on the information provided in the documents that accompany the shipment.
                    </p>
                </div>
                <div  className='col p-5'>
                    <img id='offer' className='rounded-pill' src={customer} alt="" />
                </div>
            </div>
        </div>


    </div>
  )
}
