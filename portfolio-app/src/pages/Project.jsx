import { useParams } from 'react-router-dom';
import db from '../data/db.json';

const Project = () => {
    const { id } = useParams();
    const project = db.projects.find(project => project.id === parseInt(id));

    return (
        <div>
            <h2>{project.name}</h2>
            <p>{project.type}</p>
            <p>{project.year}</p>
            <p>{project.description}</p>

            <h3>Technologies:</h3>
            <ul>
                {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
            <div className="project-images">
                {project.images.map((image) => (
                    <img 
                        key={image} 
                        src={`/images/${image}`} 
                        alt={project.name} 
                        className="img"
                    />
                ))}
            </div>

            <h3>Features:</h3>
            <div>
                {project.features.map((feature) =>(
                    <li>{feature}</li>
                ))}
            </div>

            <h3>Role:</h3>
            <p>{project.role}</p>

            <h3>Responsibilities:</h3>
            <ul>
                {project.responsibilities.map((responsibility) => (
                    <li>{responsibility}</li>
                ))}
            </ul>
            
            <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View the Project
                </a> 
            </h3>  
            <h3>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a> 
            </h3>   
        </div>
    )
}

export default Project;