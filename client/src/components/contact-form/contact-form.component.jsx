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

    render() {
        return (
           <div>
                <p>{this.state.contact}</p>
                <p>{this.state.message}</p>
               <div className="form-section">
                    <label>
                        Contact Email: 
                        <input type="email" value={this.state.contact} onChange={this.handleContactChange} />
                    </label>
               </div>
               <div className="form-section">
                    <textarea value={this.state.message} onChange={this.handleMessageChange} id="" cols="30" rows="10"></textarea>
               </div>
               <button>Submit</button>
           </div>
        )
    }
} 