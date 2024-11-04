import { useNavigate } from 'react-router-dom';
import EndGame from '../components/EndGame.js';
import Upgrade from '../components/Upgrade.js'
import EndPage from './TempEndPage.js';


interface MainPageProps {
    gold: number;
    setGold: React.Dispatch<React.SetStateAction<number>>;
    goldPerClick: number;
    setGoldPerClick: React.Dispatch<React.SetStateAction<number>>;

    endGame: () => void;
}


function MainPage({gold, setGold, goldPerClick, setGoldPerClick} : MainPageProps) {
const navigate = useNavigate();

 function increaseGold(){
  setGold(gold + goldPerClick)
 }

 function handleEndGame(){
  EndGame()
  navigate("/credit")
 }

  return (
    <div className="bg-neutral-800 text-white w-screen h-screen flex-col items-center mx-auto justify-center text-center">
      <br/>
      <br/>
      <h1 className="pt-13 pb-20 font-mono text-3xl font-semibold text-emerald-600">gold: {gold}</h1>
      <br/>
      <button 
        className="rounded-sm outline outline-emerald-600 py-4  px-20 my-10 hover:bg-neutral-600"
        onClick={increaseGold}>Click</button>
      <div className="grid grid-cols-5 justify-center pt-4 mx-20">
        
          <Upgrade
            text= {"cost: 50"}
            cost= {50}
            increase={1}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
            <Upgrade
            text= {"cost: 100"}
            cost= {100}
            increase={2}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
            <Upgrade
            text= {"cost: 150"}
            cost= {150}
            increase={3}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
            <Upgrade
            text= {"cost: 200"}
            cost= {200}
            increase={4}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 250"}
            cost= {250}
            increase={5}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 300"}
            cost= {300}
            increase={6}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 400"}
            cost= {400}
            increase={7}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 800"}
            cost= {800}
            increase={8}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 2000"}
            cost= {2000}
            increase={10}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 4000"}
            cost= {4000}
            increase={20}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 6000"}
            cost= {6000}
            increase={30}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 8000"}
            cost= {8000}
            increase={40}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 10 000"}
            cost= {10000}
            increase={50}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 20 000"}
            cost= {20000}
            increase={100}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 50 000"}
            cost= {50000}
            increase={200}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
           <Upgrade
            text= {"cost: 100 000"}
            cost= {100000}
            increase={500}
            gold ={gold}
            setGold = {setGold}
            goldPerClick = {goldPerClick}
            setGoldPerClick = {setGoldPerClick}
          />
      </div>
      <div className="grid grid-cols-5 justify-center pt-4 mx-20">
        <EndGame
          text={"End the game"}
          EndPage={handleEndGame}
        />
      </div>
    </div>
  )
}

export default MainPage
