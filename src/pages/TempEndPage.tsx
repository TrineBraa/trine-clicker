import { useNavigate } from "react-router-dom";

interface EndPageProps {
  ClickCount: number;
  goldPerClick: number;
}



function EndPage({ClickCount, goldPerClick} : EndPageProps) {

  const navigate = useNavigate();
function ReturnToStart() {
 navigate("/")
}

  return (
    <div  className="bg-neutral-800 text-white w-screen h-screen flex-col items-center mx-auto justify-center text-center py-20">
      <h1 className="pt-20 pb-10 font-mono text-6xl font-semibold text-emerald-600">Thanks for playing!</h1>
      <div className="font-mono text-xl text-emerald-600">Your final Click count: {ClickCount}</div>
      <div className="font-mono text-xl text-emerald-600 pb-20">Your final gold per click count: {goldPerClick}</div>
      <button 
      className="rounded-sm outline outline-emerald-600 py-5 px-20 hover:bg-neutral-600"
      onClick={ReturnToStart}>Restart</button>
    </div>
  )
}

export default EndPage
