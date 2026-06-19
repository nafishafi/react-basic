import './App.css'

const FunctionComponent = () => {
  return (
    <div>
      <h1>Ini adalah Functional Component</h1> 
    </div>
  )
}

// class ClassComponent extends React.Component{
//   render() {
//     return <div>
//       <h1>Ini adalah Class Component</h1>
//     </div>
//   }
// }

function App() {

  return (
    <>
      Hello World!
      <FunctionComponent />
      <FunctionComponent />
      <FunctionComponent />
      {/* <ClassComponent /> */}
    </>
  )
}

export default App
