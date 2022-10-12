import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainButton = styled.button `
    background-color: var(--color-primary);
    color: var(--grey-0);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-primary);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
    &:hover{
        background-color: var(--color-primary-focus);
        border: 1px solid var(--color-primary-focus);
    }
`
export const AltButton = styled(Link)`
    border-radius: var(--border-radius);
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
    text-decoration: none;
    color: var(--grey-0);
    font-size: 12px;
    transition: .5s;
    &:hover{
        background-color: var(--grey-2);
        border: 1px solid var(--grey-2);
    }
`
export const BackButton = styled(Link)`
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: 25%;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    max-width: 55px;
    text-decoration: none;
    font-size: 12px;
    transition: .5s;
    color: var(--grey-0);
    &:hover{
        background-color: var(--grey-2);
        border: 1px solid var(--grey-2);
    }
`
export const AddButton = styled.button`
    width: 32px;
    height: 32px;
    background-color: var(--grey-2);
    border-radius: 8px;
    color: white;
    font-weight: 700;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    border: none;

`
export const StyledDiv = styled.div`
display: flex;
margin-bottom: 1rem;
justify-content: space-between;
`
export const StyledList = styled.ul`
    width: 100%;
    min-height: 500px;
    background-color: var(--grey-3);
    border-radius: var(--border-radius);
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    li{
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background-color: var(--grey-4);
        width: 100%;
        margin: 0;
        border-radius: var(--border-radius);
        align-items: center;
        div{
            display: flex;
            justify-content: space-between;
            width: 70%;
            align-items: center;
            @media(min-width: 1024px){
                width: 30%;
            }
        }
    }
`