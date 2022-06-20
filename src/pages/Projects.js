import React from 'react';
import css from './Projects.css';
import json from '../projects.json';

function Projects() {
  return (
    <div style={css} className='projects'>
      <h1>Projects</h1>
      {getProjects()}
    </div>
  );
}

function getProjects() {

    let array = [];

    for(var proj in json){

        array.push(

            <div style={css} className="project">

                <h2>{Object.keys(json[proj])}</h2>
                <h3>{json[proj][Object.keys(json[proj])][0]}</h3>
                <h3><a target="_blank" href={json[proj][Object.keys(json[proj])][1]} rel="noopener noreferrer">View Project</a></h3>
            </div>

        );

    }

    return array;

}

export default Projects;