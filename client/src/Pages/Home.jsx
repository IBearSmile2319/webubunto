import { Link } from 'react-router-dom'
import { ReactComponent as BuldIcon } from '../Assets/img/ion-icons/bulb.svg'
import { ReactComponent as DocumentIcon } from '../Assets/img/ion-icons/document-outline.svg'
import Perfil from '../Assets/img/Perfil.jpg'
import CV from '../Assets/files/Curriculum.pdf'

const Home = () => {
  return (
    <>
    <section className="profile">
        <div className="profile__description card-template">
          <h1>
            Hello friend
              <br />
              I'm
              <span className="typed"> Maicol Manuel</span>
          </h1>
          <h3>I'm a Full Stack developer.</h3>
          <p><BuldIcon className="ion-icon" /><span> Do you have a project in mind?</span></p>
          
          <Link className="button" to="/contact"> <span>CONTACT MY</span> </Link>
        </div>
        <img src={Perfil} alt="Maicol Manuel orosco vasquez"/>
    </section>
    <a href={CV} className="btn-cv" download="Maicol Manuel Orosco Vasquez CV"><DocumentIcon className="ion-icon"/><span>Download CV</span></a>
    </>
  )
}

export default Home