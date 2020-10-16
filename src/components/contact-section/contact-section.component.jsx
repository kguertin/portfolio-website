import React from 'react';

import { ContactForm } from '../contact-form/contact-form.component';  
import { Socials } from '../socials/socials.component';

import './contact-section.styles.css';

export const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="header">Want to Talk? Lets Get in Touch!</h1>
            <ContactForm />
            <Socials />
        </div>
    )
}