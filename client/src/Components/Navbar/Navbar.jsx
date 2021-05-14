import { ReactComponent as LogoIcon } from '../../Assets/Logo.svg'
import { ReactComponent as SunnyIcon } from '../../Assets/img/ion-icons/sunny.svg'
import { ReactComponent as MoonIcon } from '../../Assets/img/ion-icons/moon.svg'
import { ReactComponent as HomeOutlineIcon } from '../../Assets/img/ion-icons/home-outline.svg'
import { ReactComponent as FolderOpenOutlineIcon } from '../../Assets/img/ion-icons/folder-open-outline.svg'
import { ReactComponent as PersonOutlineIcon } from '../../Assets/img/ion-icons/person-outline.svg'
import { ReactComponent as ChatboxOutlineIcon } from '../../Assets/img/ion-icons/chatbox-outline.svg'
// Redes sociales 
import { ReactComponent as TwitterIcon } from '../../Assets/img/ion-icons/logo-twitter.svg'
import { ReactComponent as LinkedinIcon } from '../../Assets/img/ion-icons/logo-linkedin.svg'
import { ReactComponent as FacebookIcon } from '../../Assets/img/ion-icons/logo-facebook.svg'
import { ReactComponent as GithubIcon } from '../../Assets/img/ion-icons/logo-github.svg'
import { Link,useRouteMatch } from "react-router-dom";
import { useEffect } from 'react'
const Navbar = () => {
    const theme_dark = () => {
        const themecheck = document.getElementById('nav_switch');
        const localthemecon = localStorage.getItem('theme');
        
        themecheck.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themecheck.classList.toggle('active');
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'true');
            } else {
                localStorage.setItem('theme', 'false');
            }
        })
        if (localthemecon === 'true') {
            document.body.classList.add('dark-theme');
            themecheck.classList.add('active');
        } else {
            document.body.classList.remove('dark-theme');
            themecheck.classList.remove('active');
        }
    }
    useEffect(() => {
        theme_dark();
    }, [])
    return (
        <nav className="container wrapper d-flex" id="navbar">
            <div className="d-flex item-center">
                <Link to="/portfolio">
                    <LogoIcon />
                </Link>
                <div className="nav__left--links-within">
                <MovilLinks/>
                </div>
            </div>
            <ul className="nav__right--Link">
                {[...Redes].map(e =>
                    <li key={Math.floor(Math.random() * (200 - 1)) + 1}>
                        <a href={e.link}>{e.icon}</a>
                    </li>
                )}
                <li>
                    <div className="nav_switch" id="nav_switch">
                        <span><SunnyIcon className="ion-icon" /></span>
                        <span><MoonIcon className="ion-icon" /></span>
                    </div>
                </li>
            </ul>
            <div className="MovilLinks--outside">
                <MovilLinks/>
            </div>

        </nav>
    )
}

const MenuLinks=({label,to,activeOnly,icon})=>{
    let match=useRouteMatch({
        path:to,
        exact: activeOnly
    })
    return(
        <Link className={match?"is-active":""} to={to}>{icon} <span>{label}</span></Link>
    )
}

const MovilLinks=()=>{
    return(
        <ul className="nav__left--link">
        {[...Links].map(e =>
            <li key={Math.floor(Math.random() * (200 - 1)) + 1}>
                <MenuLinks activeOnly={true} to={e.link} label={e.name} icon={e.icon} />
            </li>
        )}
    </ul>
    )
}

export default Navbar


const Links = [
    {
        id: 1,
        icon: <HomeOutlineIcon className="ion-icon" />,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        icon: <FolderOpenOutlineIcon className="ion-icon" />,
        name: "Projects",
        link: "/projects"
    },
    {
        id: 2,
        icon: <PersonOutlineIcon className="ion-icon" />,
        name: "About",
        link: "/about"
    },
    {
        id: 2,
        icon: <ChatboxOutlineIcon className="ion-icon" />,
        name: "Contact",
        link: "/contact"
    }
]

const Redes = [
    {
        icon: <LinkedinIcon className="ion-icon" />,
        link: "/"
    },
    {
        icon: <TwitterIcon className="ion-icon" />,
        link: "/"
    },
    {
        icon: <FacebookIcon className="ion-icon" />,
        link: "https://www.facebook.com/maicol.oroscovasquez.10/"
    }
    ,
    {
        icon: <GithubIcon className="ion-icon" />,
        link: "https://github.com/IBearSmile2319"
    }
]