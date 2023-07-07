import React, {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';

const Contact = () => {
    const form = useRef();

    const sendEmail = (event) => { 
        event.preventDefault();

        emailjs
            .sendForm(
                'service_snc63xv', 
                'template_05krz35', 
                form.current, 
                'sSPMfms3z6LIyCEN8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            event.target.reset()
    }




    return ( 
    <>

    <section className="contact" id='contact'>
        <SectionHeader title='Contact'/>
            <div className='container'>
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <input type='text' placeholder='Full Name' name='user_name' required></input>
                    <input type='email' placeholder='Email' name='user_email' required></input>
                    <input type='text' placeholder='Subject' name='subject' required></input>
                    <textarea name='message' placeholder='Type message here' cols='30' rows='10'></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
    </section>
    </>
     );
}
 
export default Contact;