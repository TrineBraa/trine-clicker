

interface MainPageProps {
    gold: number;
    setGold: React.Dispatch<React.SetStateAction<number>>;

    endGame: () => void;
}


function mainPage({gold} : MainPageProps) {
    

  return (
    <div className="bg-neutral-800 text-white w-screen h-screen flex-col items-center mx-auto justify-center text-center">
      gold={gold}
    </div>
  )
}

export default mainPage
