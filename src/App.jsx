import React from 'react'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'

class ClassComponent extends React.Component{
  render () {
    return <div>Ini Kelas Componenet</div>
  }
}

function App() {

  return (
    <>
      Hello World!
      <FunctionalComponent />
      <FunctionalComponent />
      <FunctionalComponent />  
      <ClassComponent />
    </>
  )
}

export default App
