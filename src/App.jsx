import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'
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

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )


}

export default App
