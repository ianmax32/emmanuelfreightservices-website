import React from 'react'
import emailjs from 'emailjs-com'
import './contact.css'

export default class Contact extends React.Component {
   
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:'',
            disabled:false
        }

        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

  

  

  handleChange(e){
      const value = e.target.value;
      const name = e.target.name;
      this.setState({
          [name]:value
      })
  }

  handleSubmit(e){
      /**e.preventDefault();
      this.sendEmail(e);
      e.target.reset();
      this.setState({
          name:'',
          email:'',
          message:'',
          disabled:true
      })*/
      window.open(`mailto:jcdishashiefs16@gmail.com?subject=Enquiry from ${this.state.name}&from=${this.state.email}&body=${this.state.message}`)
      alert('Email has been sent.');
      this.props.history.push('/');
  }

  sendEmail(e){
      emailjs.sendForm(`service_kvppv3p`, 'template_eoxcj8b', e.target, `user_Sxnj17gpr1eMNmOa2XmAu`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  }

  componentDidMount(){
    document.getElementById('maincontact').scrollIntoView();
    }

  render() {
      return(
         <div id='maincontact' >
            <h1 className='text-center pt-5'>Contact Us</h1>
            <form id='form' onSubmit={this.handleSubmit}>
            <input id='inputs' className='form-control m-3' name="name" type='text' placeholder='Full Name' value={this.state.name} onChange={this.handleChange}/>
            <input id='inputs' className='form-control m-3' name='email' type='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
            <input id='input-field' className='form-control m-3' name='message' type='text' placeholder='Enter your message here' value={this.state.message} onChange={this.handleChange}/>
            <button id='submitbtn' className='btn' type='submit'>Submit</button>
            </form>
         </div>
      )
  }
}


