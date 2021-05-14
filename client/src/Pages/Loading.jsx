import React, { useEffect } from 'react'

const Loading = () => {
    
    const checkers=()=>{
        const localthemecon = localStorage.getItem('theme');
        if (localthemecon === 'true') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
    const word=["El cliente puede llegar a ser el rey, pero no es el director de arte!","No hay diseño sin disciplina. No hay disciplina sin inteligencia","El diseño es inteligencia hecha visible","Si un diseño no se siente bien en el corazón, lo que dice el cerebro no importa","Piensa más, diseña menos","La idea no es vivir para siempre, es crear algo que sí lo haga","La gente ignora el diseño que ignora a la gente","Las mejores ideas vienen como chistes. Haz tus pensamientos tan divertidos como puedas"]
    useEffect(()=>{
        checkers()
    },[])
    return (
        <section className="PageLoading">
            <div className="Loading">
                <div className="bouncingLoader">
                    <div></div>
                </div>
                <p>{word[Math.floor(Math.random()*word.length)]}</p>
            </div>
        </section>
    )
}



export default Loading