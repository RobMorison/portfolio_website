import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({name, link, preview}) => {


    console.log(link)
    return ( 
        <article className='product-card'>
            <h3>{name}</h3>
            <a href={link}>
            <img src={preview} alt='project thumbnail' width={300}></img></a>
            
        </article>
     );
}
 
export default ProjectCard;