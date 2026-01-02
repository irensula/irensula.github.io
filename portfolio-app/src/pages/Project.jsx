import { Link, useParams } from 'react-router-dom';
import db from '../data/db.json';
import Footer from "../components/Footer";

const Project = () => {
    const { id } = useParams();
    const project = db.projects.find(project => project.id === parseInt(id));

    return (
        <div>
            <header className="inner-header">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <h2>irina: <span> sula </span></h2>          
                    </Link>  
                </div>
                <h1 className="inner-title">Software Developer Portfolio</h1>
            </header>

            <div className='container'>
                <h2 className="project-name">{project.name}</h2>
                <div className="project-container">
                    <div className="info">
                        
                        <h3 className="small-title">Application type</h3>
                        <p className="left">{project.type}</p>

                        <h3 className="small-title">Description</h3>
                        <p className="left">{project.description}</p>

                        <h3 className="small-title">Technologies</h3>
                        <ul>
                            {project.technologies.map((tech) => (
                                <li className="left" key={tech}>{tech}</li>
                            ))}
                        </ul>

                        <h3 className="small-title">Features</h3>
                        <ul>
                            {project.features.map((feature) =>(
                                <li className="left" key={feature}>{feature}</li>
                            ))}
                        </ul>

                        <h3 className="small-title">Role</h3>
                        <p className="left">{project.role}</p>

                        {project.responsibilities && (
                            <>
                                <h3 className="small-title">Responsibilities</h3>
                                <ul> 
                                    {project.responsibilities.map((responsibility) => (
                                        <li className="left" key={responsibility}>{responsibility}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        
                        {project.link && (
                                <h3 className="small-title">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link"> 
                                        View the Project
                                    </a> 
                                </h3>
                            )}  
                        {project.githubLink && (
                            <h3 className="small-title">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                    View on GitHub
                                </a> 
                            </h3>
                        )}
                        
                        {project.status && (
                            <>
                                <h3 className="small-title">Year</h3>
                                <p className="left">{project.status}</p>
                            </>
                            )
                        }

                        <h3 className="small-title">Year</h3>
                        <p className="left">{project.year}</p>
                    </div>

                    <div className={`project-screenshots ${project.type === 'Mobile application' ? 'mobile' : ''}`}>
                        {project.images.map((img, index) => (
                            <img
                                key={index}
                                src={`/images/${img}`}
                                alt={`${project.name} screenshot ${index + 1}`}
                                className="project-screenshot"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Project;