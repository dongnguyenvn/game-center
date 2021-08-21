import {useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router"
import {GameDetail} from '../../types'



type GameParams = {
    id: string;
  };

const Game = () => {
    const {id} = useParams<GameParams>()
    const [game,setGame] = useState<GameDetail | null>(null)
    const [error,setError] = useState<string>('')
    useEffect(() => {
        axios.get('/game',{
            baseURL:`https://${process.env.REACT_APP_X_RAPID_HOST}/api`,
            headers:{
                'x-rapidapi-key':process.env.REACT_APP_X_RAPID_API_KEY,
                'x-rapidapi-host': process.env.REACT_APP_X_RAPID_HOST
            },
            params: {id},
        })
        .then(res => setGame(res.data))
        .catch(e => setError(e.message))
    }, [id])

    
    if(error) return <p>error</p>


    return (
        <div>
            {game && game.screenshots.map(s => (
                <img src={s.image} alt={s.id} />
            ))}
        </div>
    )
}

export default Game
