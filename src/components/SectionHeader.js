import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({title}) => {
    return ( 
        <>
        <div className='section-header'>
            <h1>{title}</h1>
        </div>
        
        </>
     );
}
 
export default SectionHeader;