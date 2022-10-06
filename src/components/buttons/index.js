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