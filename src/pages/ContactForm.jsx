import React from 'react';
import './ContactForm.css';
import { useForm, ValidationError } from '@formspree/react';
import Button from "../components/Button"

export default function ContactForm() {
    const [state, handleSubmit] = useForm('xgejoagn');
    if (state.succeeded) {
        alert("Your message has been sent!");
    }
    return (
        <div className='contactFormPage'>
            <form onSubmit={handleSubmit} className='contactForm'>
                <h2 className='global-heading'>Contact Chris</h2>

                <h3 >For sessions, booking, inquiries and lessons please send your message here.</h3>

                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    minLength="3"
                    maxLength="50"
                    placeholder="Name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    pattern="[0-9]{10,13}"
                    title="Please enter a valid UK phone number."
                    required
                    placeholder="Phone Number"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />

                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Message"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}
