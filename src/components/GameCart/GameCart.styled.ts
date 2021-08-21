import styled from "styled-components";
import { Link } from "react-router-dom";
import { backgroundColor, primaryTextColor, secondaryColor, secondaryTextColor, tertiaryTextColor } from "../../styles/theme";

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;

    height: 100%;
    overflow: hidden;
    padding: 0.5rem;
    
    text-decoration: none;
    background-color: ${secondaryColor};
    border-radius: 0.5rem;
    transition: box-shadow 0.3s linear;

    &:hover{
        box-shadow: 0 0 2px 0.5px ${backgroundColor};
    }

`

export const Details = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    margin-top: 0.75rem;


    svg{
        width: 1.25rem;
        height: 1.25rem;
        fill: ${secondaryTextColor};
    }
`

export const Img = styled.img`
    width: 100%;
    border-radius: inherit;
`

export const Title = styled.h2`
    font-weight: 500;
    font-size:1rem;
    color: ${primaryTextColor};
`

export const Description = styled.p`
    /* flex-grow:1; */
    font-size: 0.75rem;
    color: ${secondaryTextColor};
`

export const Genre = styled.p`
    padding: 0.125rem 0.25rem;
    margin-right: 0.5rem;
    margin-left: auto;
    border-radius: 0.5rem;

    font-size: 0.75rem;
    font-weight: bold;
    
    color: ${tertiaryTextColor};
    background-color: ${backgroundColor};
`
export const Botton = styled.div`
    margin-top:auto ;
    display: flex;
    align-items: center;
`