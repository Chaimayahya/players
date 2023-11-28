import players from "../players"
import PlayerCard from "./PlayerCard"

const PlayerList=()=>{
    return(
        <div className="main">
            <h1>PlayerList</h1>
            <div className="player">
            {
                players.map((el,i,t)=> <PlayerCard key={i} el={el}/>  )
            }
            </div>
        </div>
    )
}

export default PlayerList