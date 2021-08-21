import styled from "styled-components";

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-template-rows: repeat(auto-fit,min(1fr));
    list-style: none;
    margin:0 ;
    gap:1rem;
`
export const ListItem = styled.li`
    /* height: 100%; */
`

export const Container = styled.div`
    max-width: 1000px;
    margin: 4rem auto;
`

export const ContainerLoading = styled.div`
    width:100vw;
    height: 70vh;
    /* margin-block: auto; */
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SpinerLoading = styled.div`

    width:2.5rem;
    height:2.5rem;

    border: .25rem solid white;
    border-top-color: #66e2d5;
    border-radius:100rem;

    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform:rotate(360deg);
        }
    }
`