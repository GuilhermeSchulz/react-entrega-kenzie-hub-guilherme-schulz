import styled from "styled-components";

export const StyledError =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    img{
        width: 20%;
        animation: shakeX; 
        animation-duration: 1s; 
    }
    a{
        border-radius: var(--border-radius);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        width: max-content;
        background-color: var(--grey-3);
        border: 1px solid var(--grey-3);
        max-width: 150px;
        text-decoration: none;
        font-size: 12px;
        transition: .5s;
        color: var(--grey-0);


        &:hover{
            background-color: var(--grey-2);
            border: 1px solid var(--grey-2);
        }
    }
`