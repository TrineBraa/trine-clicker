
interface EndGameProps {
    text: string;
    EndPage: () => void;
}


function EndGame({text, EndPage, } : EndGameProps) {
  return (
    <div  className="border-2 border-zinc-950 rounded-2x1 w-40 p-4 m-2 text-center">
      <h1 className={`pt-2 font-mono text-base font-semibold  text-emerald-600"`}>{text}</h1>
      <button
         className="rounded-sm py-1 px-3 mt-6 mb-5 outline outline-emerald-600 hover:bg-neutral-600"
         onClick={EndPage}>
        End Game
      </button>
    </div>
  )
}

export default EndGame
