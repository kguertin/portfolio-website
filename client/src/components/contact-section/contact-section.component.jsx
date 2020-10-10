import React from 'react';

import { ContactForm } from '../contact-form/contact-form.component';  
import { Socials } from '../socials/socials.component';

import './contact-section.styles.css';

export const Contact = () => {
    return (
        <>
            <h1>Contact</h1>
            <ContactForm />
            <Socials />
        </>
    )
}