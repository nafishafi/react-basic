import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'
import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
// import FunctionalComponent from './components/FunctionalComponent'
// import ClassComponent from './components/ClassComponent'
// import HooksComponent from './components/HooksComponent'



function App() {

  // return (
  //   <>
  //     {/* Hello World!
  //     <FunctionalComponent />
  //     <FunctionalComponent />
  //     <ClassComponent /> */}

  //     {/* <HooksComponent /> */}
  //   </>
  // )

  const themeContext = useContext(ThemeContext)
  console.log(themeContext)

  const changeTheme = () => {
    themeContext.setTheme(themeContext.theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <BrowserRouter>
      <div className={themeContext.theme}>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/detail/1'}>Detail</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
        <button onClick={changeTheme}>Change Theme to {themeContext.theme === 'light' ? 'dark' : 'light'}</button>
      </div>
    </BrowserRouter>
  )


}

export default App
