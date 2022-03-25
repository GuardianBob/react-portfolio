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
            <div className='row mx-auto'>
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.image}
                        className='col-md-4'>
                        <div className=''>
                            <img 
                                alt={project.title}
                                className=''
                                src={require(`../images/${project.image}`)}
                            />
                            <div className="">
                                <h2 className="">
                                    {project.subtitle}
                                </h2>
                                <h1 className="">
                                    {project.title}
                                </h1>
                                <p className="">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}