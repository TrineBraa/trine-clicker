
interface CreditPageProps {
    
    resetGame: () => void;
}

function endPage(resetGame : CreditPageProps) {
  return (
    <div  className="bg-neutral-800 text-white w-screen h-screen flex-col items-center mx-auto justify-center text-center">
      <button>Restart</button>
    </div>
  )
}

export default endPage
