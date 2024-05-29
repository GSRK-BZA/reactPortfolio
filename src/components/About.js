import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

function About(){
    return (
        <div className='A-container'>
            <div className="Top">
                <div className="A-Text sand">
                    <h1>About Me</h1>
                    <p>Web Designer & Developer</p>
                </div>
                <div className="box Image">
                    <img src="https://voxpopmarketing.com/wp-content/uploads/2019/06/AdobeStock_230366692.jpeg" alt="img"></img>
                </div>
                <div className="box yellow">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <h1>Skills</h1>
                    <p>I have expertise in HTML, CSS, and JavaScript. I am also proficient in React and have experience with front-end development.</p>
                </div>
            </div>
            <div className='Bottom'>
                <div className="box yellow">
                    <FontAwesomeIcon icon={faDesktop} />
                    <h1>Experience</h1>
                    <p>I have worked on various web development projects, including building responsive websites and web applications.</p>
                </div>
                <div className="box light">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <h1>Education</h1>
                    <p>I have a degree in Computer Science and have completed several online courses to enhance my skills in web development.</p>
                </div>
                <div className="box orange">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <h1>Projects</h1>
                    <p>I have contributed to open-source projects and have developed personal projects to showcase my skills.</p>
                </div>
                <div className="box dark">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <h1>Achievements</h1>
                    <p>I have received recognition for my work in web development and have been awarded for my contributions to the field.</p>
                </div>
            </div>
        </div>
    );
}
export default About;