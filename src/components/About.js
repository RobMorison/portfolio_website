import React from 'react';
import './About.css';
import selfie from '../assets/selfie.png'
import SectionHeader from './SectionHeader';


const About = () => {
    return ( 
        <>
        <section id='about'>
            <SectionHeader title='About Me'/>
                <div className='about'>
                    <div>
                        <p className='about-me'>
                            Junior Software Developer with a focus on developing my skills everyday that embraces a fast-paced team
                            environement.  Striving to work with team members and project leaders to solve problems and create functioning
                            and aestetically pleasing application.  With an understanding of the full development cycle and working with front and 
                            back end techologies
                        </p>
                    </div>
                    <img src={selfie} alt='picure of myself'></img>
                </div>
        </section>
        </>
     );
}
 
export default About;