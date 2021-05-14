import React from 'react'
import {ReactComponent as HTMLIcon} from '../Assets/img/ion-icons/logo-html5.svg'
import {ReactComponent as CSS3Icon} from '../Assets/img/ion-icons/logo-css3.svg'
import {ReactComponent as JavascriptIcon} from '../Assets/img/ion-icons/logo-javascript.svg'
import {ReactComponent as SassIcon} from '../Assets/img/ion-icons/logo-sass.svg'
import {ReactComponent as NodeJSIcon} from '../Assets/img/ion-icons/logo-nodejs.svg'
import {ReactComponent as MysqlIcon} from '../Assets/img/ion-icons/mysql.svg'
import {ReactComponent as MongoDBIcon} from '../Assets/img/ion-icons/mongodb.svg'
import {ReactComponent as GitIcon} from '../Assets/img/ion-icons/git-icon.svg'
import {ReactComponent as ReactJSIcon} from '../Assets/img/ion-icons/react-icon.svg'
import {ReactComponent as ReactNativeIcon} from '../Assets/img/ion-icons/reactNtive-icon.svg'
import {ReactComponent as PHPIcon} from '../Assets/img/ion-icons/PHP-logo.svg'
import {ReactComponent as JAVAIcon} from '../Assets/img/ion-icons/java.svg'
import {ReactComponent as PythonIcon} from '../Assets/img/ion-icons/python.svg'

import {ReactComponent as CIcon} from '../Assets/img/ion-icons/c.svg'
import {ReactComponent as AngularIcon} from '../Assets/img/ion-icons/angular-icon.svg'
import {ReactComponent as VueJSIcon} from '../Assets/img/ion-icons/vue-js.svg'
import {ReactComponent as FigmaIcon} from '../Assets/img/ion-icons/figma.svg'

import {ReactComponent as VisualStudioIcon} from '../Assets/img/ion-icons/visual-studio-2013.svg'
import {ReactComponent as AdobeIllustratorIcon} from '../Assets/img/ion-icons/adobe-illustrator-cc.svg'
import {ReactComponent as PhotoshopoIcon} from '../Assets/img/ion-icons/photoshop-cc.svg'





const About = () => {
    return (
        <div className="about">
        <section className="aboutMy">
            <h2 className="tittle">Who am I?</h2>
            <p>My name is Maicol Manuel and I'm a fullstack developer.</p>
            <p>I have 20 years and I'm from Peru.</p>
            <p>Programming is my hobby and my job. </p>
        </section>
        <h2 className="tittle">Skills</h2>
        <section className="technologies">
            {[...technology].map(e=><div key={Math.random()*(100 - 1) + 1} className="technology">{e.icon}<p>{e.label}</p></div>)}
            
        </section>
        <h2 className="tittle">I'm learning</h2>
        <section className="technologies">
            {[...technology2].map(e=><div key={Math.random()*(200 - 100) + 100} className="technology">{e.icon}<p>{e.label}</p></div>)}
            
        </section>
        <h2 className="tittle">And I've also worked with</h2>
        <section className="technologies">
            {[...technology3].map(e=><div key={Math.random()*(300 - 200) + 200} className="technology">{e.icon}<p>{e.label}</p></div>)}
            
        </section>
        </div>
    )
}
const technology=[
    {
        icon:<HTMLIcon className="html5Icon"/>,
        label:"HTML5"
    },
    {
        icon:<CSS3Icon className="CSS3Icon"/>,
        label:"CSS3"
    },
    {
        icon:<JavascriptIcon className="JavascriptIcon"/>,
        label:"JavaScript"
    },
    {
        icon:<SassIcon className="SassIcon"/>,
        label:"Sass"
    },
    {
        icon:<NodeJSIcon className="NodeJSIcon"/>,
        label:"NodeJS"
    },
    {
        icon:<JAVAIcon className="ion-icon"/>,
        label:"JAVA"
    },
    {
        icon:<PythonIcon className="ion-icon"/>,
        label:"Phyton"
    },
    {
        icon:<MysqlIcon className="ion-icon"/>,
        label:"MySQL"
    },
    {
        icon:<PHPIcon className="ion-icon"/>,
        label:"PHP"
    },
    {
        icon:<MongoDBIcon className="ion-icon"/>,
        label:"MongoDB"
    },
    {
        icon:<GitIcon className="ion-icon"/>,
        label:"Git"
    },
    {
        icon:<ReactJSIcon className="ion-icon"/>,
        label:"ReactJS"
    },
    {
        icon:<ReactNativeIcon className="ion-icon"/>,
        label:"React Native"
    },
    
    
]
const technology2=[
    {
        icon:<CIcon className="ion-icon"/>,
        label:"C++"
    },
    {
        icon:<VueJSIcon className="ion-icon"/>,
        label:"VueJS"
    },
    {
        icon:<AngularIcon className="ion-icon"/>,
        label:"AngularJS"
    },
    {
        icon:<FigmaIcon className="ion-icon"/>,
        label:"Figma"
    },
]
const technology3=[
    {
        icon:<VisualStudioIcon className="ion-icon"/>,
        label:"Visual Studio"
    },
    {
        icon:<AdobeIllustratorIcon className="ion-icon"/>,
        label:"Adobe Illustrator"
    },
    {
        icon:<PhotoshopoIcon className="ion-icon"/>,
        label:"Photoshop"
    },
]
export default About
