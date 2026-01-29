import React from 'react';
import Skills from './Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./skills-box.css";

const SkillsBox = ({title, dataLink, icon}) => {
  return (
    <div className="resume-box">
        <div className="resume-title">
            <h3>{title}</h3>
        </div>
        {
            icon === undefined ? (
                <div className="resume-skills">
                    {dataLink?.map((skill) => (
                    <Skills
                        key={skill?.id}
                        title={skill?.skillsTitle}
                        status={skill?.skillsCase}
                        style={skill?.skillsCase}
                    />
                    ))}
        </div>
        ) : (
            <div>
                {dataLink?.map((skill) => (
                    <div className="know-skills d-flex" key={skill?.id}>
                    <FontAwesomeIcon className="know-Icon" icon={icon} />
                    <p>{skill.skillsTitle}</p>
                    </div>
                ))}
                
            </div>
        )
        }
    </div>
  )
}

export default SkillsBox;