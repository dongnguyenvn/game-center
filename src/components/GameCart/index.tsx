import { FC } from "react"
import { Game } from "../../types"
import {StyledLink,Img,Title,Details,Description,Genre,Botton} from "./GameCart.styled"
import {AiOutlineChrome,AiOutlineWindows} from 'react-icons/ai'

type typeProps = {
    game: Game
}

const GameCart:FC<typeProps> = ({game}) => {
    const {id,title,thumbnail,short_description,genre,platform} = game;
    const link = `/game/${id}`

    const icon = platform.split(',').map(p => {
        let icon = null
        switch (p.trim()) {
            case 'Web Browser':
                icon = <AiOutlineChrome key={`${id}-brower`} /> 
                break;
            case 'PC (Windows)':
                icon = <AiOutlineWindows key={`${id}-window`} />
                break;
            default:
                break;
        }
        return icon
    }
    )

    return (
        <StyledLink to={link}>
            <Img src={thumbnail} alt={title} />
            <Details>
                <Title>{title}</Title>
                <Description>{short_description}</Description>
                <Botton>
                    {icon}
                    <Genre>{genre}</Genre>
                </Botton>
            </Details>
        </StyledLink>
    )
}

export default GameCart