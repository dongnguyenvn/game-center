import { FC } from "react"
import GameCart from "../GameCart"
import {List,ListItem,Container,ContainerLoading,SpinerLoading} from './GameList.styled'
import useFetchGams from '../../hooks/useFetchGames'


const GameList:FC = () => {
    const {loading,error,datas} = useFetchGams('games')

    return (
        <>
            {loading && (<ContainerLoading><SpinerLoading></SpinerLoading></ContainerLoading>)}
            {!loading && error ? 
                (
                    <ContainerLoading><p>Unable to fetch games</p></ContainerLoading>
                ) : (
                    <Container>
                        <List>
                            {datas && datas.map(game => (
                                <ListItem key={game.id}>
                                    <GameCart game={game}/>
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                    )
            }
        </>
    )
}

export default GameList
