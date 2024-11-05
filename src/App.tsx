import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { useState } from 'react'
import StartPage from './pages/TempStartPage'
import MainPage from './pages/TempMainPage';
import EndPage from './pages/TempEndPage';
import './App.css'



function App() {
   const [gold, setGold] = useState(1);
   const [goldPerClick, setGoldPerClick] = useState(1);
   const [ClickCount, setClickCount] = useState(0);


  function resetGame() {
    setGold(1);
    setClickCount(0);
    setGoldPerClick(1);
   }

 
  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element ={<StartPage resetGame={resetGame}/>}/>
        <Route 
          path={'/main'} 
          element={
            <MainPage
               gold ={gold}
               setGold = {setGold}
               goldPerClick = {goldPerClick}
               setGoldPerClick = {setGoldPerClick}
               resetGame = {resetGame}
               ClickCount= {ClickCount}
               setClickCount= {setClickCount}
               endGame={() => <Navigate to="/credit" replace/>}
            />}
          />
        <Route
          path="/credit"
          element = {
          <EndPage 
            ClickCount = {ClickCount}
            goldPerClick= {goldPerClick}
          />}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App

