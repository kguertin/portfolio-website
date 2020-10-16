import React from 'react';
import { Component } from 'react';

import './contact-form.styles.css';

export class ContactForm extends Component{
    constructor() {
        super();

        this.state = {
            message: '',
            email: '',
            name: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = e => {
        e.preventDefault();

        const messageData = {
            message: this.state.message,
            email: this.state.email,
            subject: this.state.subject
        }

       fetch('http://localhost:8000/email', {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(messageData)
       })
       .then(res => res.json())
       .then(res => console.log(res))
       .catch(err => console.log(err));  
    }

    render() {
        return (
           <div className="form-container">
               <form onSubmit={this.handleSubmit}>
                    <div className="form-section">
                        <label>Subject: </label>
                        <input className="email-input" name="subject" type="text" value={this.state.subject} onChange={this.handleChange} />
                    </div>
                    <div className="form-section">
                        <label>Contact Email: </label>
                        <input className="email-input" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-section">
                        <label>Message:</label>
                        <textarea className="message-input" name="message" value={this.state.message} onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
               </form>
           </div>
        )
    }
} 