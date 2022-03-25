import React, { useState } from 'react';
import { projects } from "../data";

export default function Projects() {
    const [altBG, setAltBG] = useState(false);

    const getBG = () => {
        let newBG = ""
        altBG === false ? newBG = "bg-black" : newBG = "bg-white";
        setAltBG(!altBG);
        console.log(newBG);
        return newBG;
    }

    return(
        <section id='projects'>
            <div className='row mx-auto'>
                <div className='col-md-10'>
                    <h1>Projects</h1>
                    <p>
                        Summary of projects...
                    </p>
                </div>
            </div>
            <div className='row mx-auto justify-content-around'>
                {projects.map((project) => (                    
                    <a
                        href={project.link}
                        key={project.image}
                        className={`col-md-6 ${getBG()}`}>
                        <div className=''>
                            <img 
                                alt={project.title}
                                className='mx-auto d-block'
                                src={require(`../images/${project.image}`)}
                                width="100"
                            />
                            <div className="">
                                <h2 className="text-center">
                                    {project.subtitle}
                                </h2>
                                <h1 className="text-center">
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