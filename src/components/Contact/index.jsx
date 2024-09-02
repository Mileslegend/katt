import React, { useRef } from 'react'; // Added useRef from react
import { contacts } from '../../data';
import emailjs from "@emailjs/browser"; // Imported emailjs library
import './Contact.css';

const Contact = () => {
    const form = useRef(null); // Added null as initial value for useRef
    const clearForm = () => {
        form.current.reset();
    };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_pik0bkn', 'template_tl4meir', form.current, {
                publicKey: '5y582uX0EBJrUO9q5',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    clearForm(); // Clear the form after successful submission
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <section id='contact'>
            <div className="bg__image"></div>
            <div className="overlay"></div>
            <div className="container">
                <div className="column">
                    {contacts.map((contact, index) => (
                        <div className="contact__info" key={index}>
                            <div className="icon__container">
                                {contact.icon}
                            </div>
                            <div className="details">
                                <p className="text__muted">
                                    {contact.name}
                                </p>
                                <h3 className="value">{contact.value}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="column form__container">
                    <div className="form__top">
                        <h3 className="sub__title g-text">Keep In Touch</h3>
                        <p>Schedule an adventure with friends. On holidays, there are many interesting offers from Katsmo safaris.</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form__middle">
                            <div className="row">
                                <input type='text' placeholder='First Name' name='firstname' className='control' />
                                <input type='text' placeholder='Last Name' name='lastname' className='control' />
                            </div>
                            <div className="row">
                                <input type='email' placeholder='Email Address' name='email' className='control' />
                                <input type='tel' placeholder='Phone Number' name='phone' className='control' />
                            </div>
                            <textarea name="message" cols={30} rows={5} placeholder='Message' className='control'></textarea>
                        </div>
                        <div className="form__bottom"> {/* Changed "form__buttom" to "form__bottom" */}
                            <button type="submit" className="btn btn__primary">Send Message</button> {/* Added type="submit" to the button */}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;