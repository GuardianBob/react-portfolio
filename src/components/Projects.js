import React from 'react';
import { projects } from "../data";

export default function Projects() {
    return(
        <section id='projects'>
            <div className='row mx-auto'>
                <div className='col-md-12'>
                    <h1>Projects</h1>
                    <p>
                        Summary of projects...
                    </p>
                </div>
            </div>
            <div className='col-md-12'>
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.image}
                        className=''
                ))}
            </div>
        </section>
    );
}