import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="some">
                <a href="https://github.com/irensula">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/iryna-sula-022296129/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:irensula19@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>
            <p className="center">{year} &#169; All rigths reserved</p>
        </footer>  
    )
};

export default Footer;