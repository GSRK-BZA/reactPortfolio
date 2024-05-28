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
                    <img src="https://voxpopmarketing.com/wp-content/uploads/2019/06/AdobeStock_230366692.jpeg"alt="img"></img>
                </div>
                <div className="box yellow">
                <FontAwesomeIcon icon={faPaperPlane} />
                    <h1>Proin lobortis eu </h1>
                    <p>Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu, iaculis congue sem.</p>
                </div>
            </div>
            <div className='Bottom'>
                <div className="box yellow">
                    <FontAwesomeIcon icon={faDesktop} />     
                    <h1>Proin lobortis eu </h1>
                    <p>Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu, iaculis congue sem.</p>           
                </div>
                <div className="box light">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <h1>Proin lobortis eu </h1>
                    <p>Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu, iaculis congue sem.</p>
                </div>
                <div className="box orange">
                <FontAwesomeIcon icon={faPaperPlane} />
                    <h1>Proin lobortis eu </h1>
                    <p>Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu, iaculis congue sem.</p>
                </div>
                <div className="box dark">
                <FontAwesomeIcon icon={faPaperPlane} />
                    <h1>Proin lobortis eu </h1>
                    <p>Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu, iaculis congue sem.</p>
                </div>
            </div>
        </div>
    );
}
export default About;