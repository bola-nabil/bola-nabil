import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = ({title, content, linkPath}) => {
  console.log("link", linkPath)
  return (
    <div>
       {
          linkPath === undefined ? (
           <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
          ): (
            <div>
                <h2>{title}</h2>
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