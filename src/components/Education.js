import React from 'react';
import devcodecamp from '../assets/devcodecamp.png';
import ccsu from '../assets/ccsu.png';
import './Education.css';
import SectionHeader from './SectionHeader';

const Education = () => {
    return ( 
        <>
        <section id='education'>
            <SectionHeader title='Education'/>
                <div className='ed-container' >
                    <div className='education'>
                        <img src={devcodecamp} alt='devcodecamp logo'></img>
                        <div className="devinfo">
                            <h2>devCodeCamp</h2>
                            <p>Full Stack Software Development | 2022-2023</p>
                            <p>A 20-week, project based coding bootcamp focused on computer science concepts,
                                building real-world full-stack applications.  This course focused on building 
                                building qualified job candidates by teaching and applying concepts in a project
                                form, allowing students to develop fundamentals in programming, problem solving,
                                debugging/error handling, object-oriented programming, web design and development,
                                and more.
                            </p>
                        </div>
                    </div>
                    <div className='education'>
                        <img src={ccsu} alt ='ccsu logo' height={100}></img>
                        <div className='devinfo'>
                        <h2>Central Connecticut State University</h2>
                        <p>Bachelor degree in Criminology | 2006-2010</p>
                        <p>2 year athlete</p>
                        <p>Student Football Coach</p>
                        </div>
                    </div>
                </div>
        </section>
        </>
     );
}
 
export default Education;