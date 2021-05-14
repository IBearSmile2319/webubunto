import {ReactComponent as EmailIcon} from '../Assets/img/ion-icons/mail-unread-outline.svg'
import {ReactComponent as TwitterIcon} from '../Assets/img/ion-icons/logo-twitter.svg'
import {ReactComponent as LinkedinIcon} from '../Assets/img/ion-icons/logo-linkedin.svg'
import {ReactComponent as GitHubIcon} from '../Assets/img/ion-icons/logo-github.svg'


const Contact = () => {
    return (
        <section className="PageContact">
            <div className="contact-content">
                <h1 className="tittle">Send me a message and follow me on</h1>
                <div className="card-template">
                    <div className="grid col-3">
                        {[...contact].map(e=><a className="button-contact" href={e.link}>{e.icon} <span>{e.name}</span></a>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
const contact=[
    {
        icon:<EmailIcon className="ion-icon"/>,
        name:"Email",
        link:"mailto:maicolgamer23@hotmail.com"
    },
    {
        icon:<TwitterIcon className="ion-icon"/>,
        name:"Twitter",
        link:"#"
    },
    {
        icon:<LinkedinIcon className="ion-icon"/>,
        name:"LinkedIn",
        link:"#"
    },
    {
        icon:<GitHubIcon className="ion-icon"/>,
        name:"GitHub",
        link:"#"
    },
]
export default Contact
