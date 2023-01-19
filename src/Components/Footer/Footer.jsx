import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import {FaFacebookSquare, FaInstagram,FaGithub,FaLinkedinIn,FaRegCopyright} from 'react-icons/fa'
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div id='mainfooter'>
      <div id='footer-things' className='row container'>
          <div className='col'>
            <h4>EFS</h4>
            <p>“All your life, no one will be able to hold out against you. In the same way I was with Moses, I'll be with you. I won't give up on you; I won't leave you.”</p>
          </div>
          <div className='col'>
            <h4>Our Company</h4>
            <ul>
              <li><Link to='/About' id='links'>About Us</Link> </li>
              <li><Link to='/Services' id='links'>Services</Link> </li>
              <li><Link to='/Contact' id='links'>Message</Link>  </li>
            </ul>
          </div>
          <div className='col'>
            <div id='contacts' className="p-0 col" md={3} sm={12}>
              <h4>Find us on</h4>
              <a href='' id='icons' className="m-1"><FaFacebookSquare size={20} color={'white'}/> Facebook</a>
              <a href='' id='icons' className="m-1"><FaInstagram size={20} color={'white'}/> Instagram</a>
              <a href='' id='icons' className="m-1"><FaLinkedinIn size={20} color={'white'}/> LinkedIn</a>
            </div>
          </div>
          <div id='contacts' className="p-0 col" md={3} sm={12}>
            <h4>Contact Details</h4>
            Email : <a href="mailto:jcdishashiefs16@gmail.com" className='text-white'>jcdishashiefs16@gmail.com</a><br/>
            <a href="mailto:info@emmanuelfreightservices.co.za" className='text-white'>info@emmanuelfreightservices.co.za</a><br/>
            Cell: <a href="tel:+27677456682" className='text-white'>+27 76 745 6682</a>
            Tell: <a href="tel:+27114531851" className='text-white'>+27 11 453 1851</a> 
            
          </div>
      </div>
      <p className='text-white pt-5'>
          Address: 135 kuschke road unit b2 meadowdale/ Germiston South africa <br/>
          <FaRegCopyright />Emmanuel Freight Services (PYT) LTD 2023. All rights reserved.
        </p>
    </div>
  )
}
