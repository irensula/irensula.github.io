import { Link, useParams } from 'react-router-dom';
import db from '../data/db.json';
import ImageCarousel from '../components/ImageCarousel';
import Footer from "../components/Footer";

const Project = () => {
    const { id } = useParams();
    const project = db.projects.find(project => project.id === parseInt(id));

    return (
        <div>
            <header className="inner-header">
                <div className="logo">
                    <Link to="/">
                        <h2>irina: <span> sula </span></h2>          
                    </Link>  
                </div>
                <h1 className="inner-title">Software Developer Portfolio</h1>
            </header>

            <div className="project-container">
                <h2 className="project-name">{project.name}</h2>
                <p className="left">{project.type}</p>
                <p className="left">{project.year}</p>
                <p className="left">{project.description}</p>

                <div className="project-carousel">
                    <ImageCarousel images={project.images} alt={project.name} />
                </div>

                <h3 className="project-title">Technologies</h3>
                <ul>
                    {project.technologies.map((tech) => (
                        <li className="left" key={tech}>{tech}</li>
                    ))}
                </ul>

                <h3 className="project-title">Features</h3>
                <ul>
                    {project.features.map((feature) =>(
                        <li className="left" key={feature}>{feature}</li>
                    ))}
                </ul>

                <h3 className="project-title">Role</h3>
                <p className="left">{project.role}</p>

                {project.responsibilities && (
                    <>
                        <h3 className="project-title">Responsibilities</h3>
                        <ul> 
                            {project.responsibilities.map((responsibility) => (
                                <li className="left" key={responsibility}>{responsibility}</li>
                            ))}
                        </ul>
                    </>
                )}
                
                <h3 className="project-title">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View the Project
                    </a> 
                </h3>  
                <h3 className="project-title">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a> 
                </h3>
            </div>
            <Footer />
        </div>
    )
}

export default Project;