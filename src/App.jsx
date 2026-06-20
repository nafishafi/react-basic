import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './pages/Home'
// import About from './pages/About'
// import Detail from './pages/Detail'
import React, { Suspense, useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
// import LazyLoading from './pages/LazyLoading'
// import ReactMemo from './pages/ReactMemo'
// import Memoization from './pages/Memoization'
// import FunctionalComponent from './components/FunctionalComponent'
// import ClassComponent from './components/ClassComponent'
// import HooksComponent from './components/HooksComponent'

const LazyLoading = React.lazy(() => import('./pages/LazyLoading'))
const ReactMemo = React.lazy(() => import('./pages/ReactMemo'))
const Memoization = React.lazy(() => import('./pages/Memoization'))


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

  const {theme} = themeContext
  
  // return (
  //   <BrowserRouter>
  //     <div className={themeContext.theme}>
  //       <div>
  //         <Link to={'/'}>Home</Link>
  //         <Link to={'/about'}>About</Link>
  //         <Link to={'/detail/1'}>Detail</Link>
  //       </div>
  //       <Routes>
  //         <Route path='/' element={<Home />} />
  //         <Route path='/about' element={<About />} />
  //         <Route path='/detail/:id' element={<Detail />} />
  //       </Routes>
  //       <button onClick={changeTheme}>Change Theme to {themeContext.theme === 'light' ? 'dark' : 'light'}</button>
  //     </div>
  //   </BrowserRouter>
  // )

  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <nav className='navbar'>
          <div>
            <Link to={'/lazyloading'}>LazyLoading</Link>
            <Link to={'/reactmemo'}>ReactMemo</Link>
            <Link to={'/memoization'}>Memoization</Link>
          </div>
          <button onClick={changeTheme}>Change Theme to {themeContext.theme === 'light' ? 'dark' : 'light'}</button>
        </nav>
        <Suspense fallback={'Loading...'}>
          <Routes>
            <Route path='/lazyloading' element={<LazyLoading />} />
            <Route path='/reactmemo' element={<ReactMemo />} />
            <Route path='/memoization' element={<Memoization />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )


}

export default App
