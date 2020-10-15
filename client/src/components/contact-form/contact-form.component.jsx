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

       fetch('http://localhost:8000/email', {
           method: "POST"
       })
    }

    render() {
        return (
           <div className="form-container">
               <form onSubmit={this.handleSubmit}>
                    <div className="form-section">
                        <label>Name: </label>
                        <input className="email-input" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-section">
                        <label>Contact Email: </label>
                        <input className="email-input" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-section">
                        <label>Message:</label>
                        <textarea className="message-input" name="message" value={this.state.message} onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit">Submit</button>
               </form>
           </div>
        )
    }
} 