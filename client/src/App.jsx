import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import MainContainer from './Components/Layout/Container/MainContainer'
import MainContent from './Components/Layout/Content/MainContent'
import LayoutHeader from './Components/Layout/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Loading from './Pages/Loading'
import Projects from './Pages/Projects'
const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <MainContainer>
      {
        loading ?
          <Loading />
          :
          <>
            <LayoutHeader>
              <Navbar />
            </LayoutHeader>
            <MainContent>
              <Switch>
                <Route exact path="/projects" render={props => <Projects {...props} />} />
                <Route exact path="/contact" render={props => <Contact {...props} />} />
                <Route exact path="/about" render={props => <About {...props} />} />
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route exact path="/**" render={props => <Error {...props} />} />
              </Switch>
            </MainContent>
          </>
      }

    </MainContainer>
  )
}

export default App;
