import React,{useEffect} from 'react'
import './about.css'
import offer from '../../Images/offer.jpg'
import differ from  '../../Images/differ.jpg'

export default function About() {
  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView({
          behavior: 'smooth'
      }, 500)

  }, []);
  return (
    <div>
      <h1 id='about'>About Us</h1>
      <div className='container'>
        <h2>We are based in South Africa</h2>
        <p >
        At Emmanuel Freight Services we offer comprehensive import/export, freight forwarding and logistical management solutions to importers and exporters around South Africa.
        Over the years we have worked hard to develop and nurture longstanding relationships with the airlines which operate to and from South Africa in order to ensure that our clients receive a quality service at the best possible price.
        </p>

        <div id='info' className='row mt-5 mb-5'>
          <div  className='col p-5'>
            <img id='offer' src={offer} alt="" />
          </div>
          <div className='col p-5'>
            <h3>What we do?</h3>
            <p>
              We are an intermediary between the company or person who makes the shipment and the final destination for the goods. We use our trusted contacts with carriers and partners from air transport specialists and trucking companies, together with our own trucks to transoceanic lines in order to negotiate the best possible price.  This may be using established commercial routes with regular frequent departures, or by charter, valuing different offers and choosing the better route that optimizes speed, costs and reliability, considering all the variables necessary for the analysis of each case.
            </p>
          </div>
        </div>

        <div id='info' className='row mt-5 mb-5'>
          <div className='col p-5'>
            <h3>How we differ from others?</h3>
            <p>
              <h4>We offer</h4>
              <ul>
                <li><b>Capacity in Your High-Volume Lanes</b>: That means we have strong relationships with carriers that service many lanes, giving you access to capacity with good negotiated rates that other forwarders may not have.</li>
                <li><b>Owned Local Office Network</b>: Staff at these local owned offices will have a good understanding of local market regulations and will communicate with local agencies and logistics partners in the local language to get things done.</li>
                <li><b>Multiple Service Offerings</b>: This means we save you the time and effort of arranging services that go beyond goods transport, like customs brokerage, insurance, and even warehousing services at the destination site.</li>
              </ul>
            </p>
          </div>
          <div  className='col p-5'>
            <img id='offer' src={differ} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
