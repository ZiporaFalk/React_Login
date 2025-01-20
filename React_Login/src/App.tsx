import { RouterProvider } from 'react-router'
import './App.css'
import HomePage from './Components/HomePage'
import { myRouter } from './Router'

function App() {
  return (
    <>
      <header>
        <HomePage ></HomePage>
      </header>
      <h1 id="home" >Home</h1 >

      <RouterProvider router={myRouter} />
    </>
  )
}

export default App



