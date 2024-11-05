import {useNavigate} from "react-router-dom";

interface StartPageProps {
  resetGame: () => void;
}

const StartPage = ({resetGame}: StartPageProps) => {
const navigate = useNavigate();

   function StartGame() {
    resetGame();
    navigate("/main");
  }

  return (
    <div  className="bg-neutral-800 text-white w-screen h-screen flex-col items-center mx-auto justify-center text-center py-20">
      <h1 className="py-20 font-mono text-6xl font-semibold text-emerald-600">Trine Clicker Game</h1>
      <button
      className="rounded-sm outline outline-emerald-600 py-5 px-20 hover:bg-neutral-600"
      onClick={StartGame}
        >
          Start
        </button>
    </div>
  )
}

export default StartPage
