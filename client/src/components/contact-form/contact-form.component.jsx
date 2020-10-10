import React from 'react';
import { Component } from 'react';

import './contact-form.styles.css';

export class ContactForm extends Component{
    constructor() {
        super();

        this.state = {
            message: '',
            contact: ''
        }
    }

    handleContactChange = (event) => {
        this.setState({contact: event.target.value})
    }

    handleMessageChange = (event) => {
        this.setState({message: event.target.value})
    }

    handleSubmit = () => {
       fetch('http://localhost:8000/email', {
           method: "POST"
       })
    }

    render() {
        return (
           <div className="form-container">
               <div className="form">
                <div className="form-section">
                        <label>
                            Contact Email: 
                            <input type="email" value={this.state.contact} onChange={this.handleContactChange} />
                        </label>
                </div>
                <div className="form-section">
                    <label>Message: 
                        <textarea value={this.state.message} onChange={this.handleMessageChange} id="" cols="30" rows="10"></textarea>
                    </label>
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
               </div>
           </div>
        )
    }
} 