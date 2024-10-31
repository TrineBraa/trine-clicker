import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { useState } from 'react'
import StartPage from "./pages/startPage"
import MainPage from './pages/mainPage';
import EndPage from './pages/endPage';
import './App.css'



function App() {
   const [gold, setGold] = useState(1);
  

  function resetGame() {
    setGold(1);
   }

   function endGame() {

   }

  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element ={<StartPage/>}/>
        <Route 
          path={'/main'} 
          element={
            <MainPage
               gold ={gold}
               setGold = {setGold}
              endGame={endGame}
            />}
          />
        <Route
        path="/credit"
        element = {<EndPage resetGame={resetGame}/>}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App

