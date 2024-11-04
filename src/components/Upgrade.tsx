

interface UpgradeProps {
    text: string;
    cost: number;
    increase: number;
    gold: number;
    setGold: React.Dispatch<React.SetStateAction<number>>;
    goldPerClick: number;
    setGoldPerClick: React.Dispatch<React.SetStateAction<number>>;

}

function Upgrade ({text, cost, increase, gold, setGold, goldPerClick, setGoldPerClick} : UpgradeProps) {
    function BuyUpgrade(){
        setGold(gold-cost)
        setGoldPerClick(goldPerClick + increase)
    }

  return (
    <div  className="border-2 border-zinc-950 rounded-2x1 w-30 p-2 m-2 text-center">
      <h1 className={`pt-2 font-mono text-base font-semibold ${gold >= cost? " text-emerald-600": "text-zinc-600"}`}>{text}</h1>
      <button
         className={`rounded-sm py-1 px-3 mt-6 mb-5 outline ${gold >= cost ? " outline-emerald-600 hover:bg-neutral-600" : "outline-zinc-950 hover:bg-neutral-600"} `}
         onClick={BuyUpgrade}
         disabled={gold<cost}>
        Purchase
      </button>
    </div>
  )
}

export default Upgrade
