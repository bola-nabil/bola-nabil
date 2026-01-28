import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutMe.css";

const AboutMe = ({title, content, linkPath}) => {
  return (
    <div>
       {
          linkPath === undefined ? (
           <div className='pb-2'>
                <h2 className='fs-3 fw-bold'>{title}</h2>
                <p className=''>{content}</p>
            </div>
          ): (
            <div className='pb-3'>
                <h2 className='fs-3 fw-bold'>{title}</h2>
                <Link to={linkPath} target='_blank'>
                  {content}
                </Link>
              </div>
          )
       }
    </div>
  )
}

export default AboutMe