import styled from "styled-components";

export const StyledSignUp = styled.div `
    
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    section{
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        margin-bottom: 1rem;
        padding: 1rem;
        animation: zoomInDown; 
        animation-duration: 1s;
        max-width: 370px;

        
    }
    div{
        animation: zoomInUp; 
        animation-duration: 1s;
        width: 90%;
        height: max-content;
        box-shadow: var(--shadow);
        border-radius: var(--border-radius);
        background-color: var(--grey-3);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        color: var(--grey-0);
        max-width: 370px;
        
            form{
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
                gap: 1rem;
                padding: 1rem;
                height: max-content;
                max-height: 600px;
                overflow-y: auto;
                input{
                    padding: .8rem .5rem;
                    width: 100%;
                    background-color: var(--grey-2);
                    outline: none;
                    border: 2px solid transparent;
                    border-radius: var(--border-radius);
                    color: var(--grey-1);
                    transition: .5s;
                    &:focus{
                        border: 2px solid var(--grey-0);
                        color: var(--grey-0);
                    }
                    &:hover{
                        border: 2px solid var(--grey-0);
                    }
                }
                h1{
                    font-size: var(--title-size-1);
                    font-weight: var(--title-weight-1);
                }
                label{
                    font-size: 9px;
                    font-weight: var(--headline-weight-1);
                    text-align: left;
                    width: 100%;
                }
                select{
                    padding: .8rem .5rem;
                    width: 100%;
                    background-color: var(--grey-2);
                    outline: none;
                    border: 2px solid transparent;
                    border-radius: var(--border-radius);
                    color: var(--grey-1);
                    transition: .5s;
                }
                
                .error {
                font-size: 10px;
                color: var(--negative);
                }
                
            }
            p{
                font-size: 9px;
                font-weight: var(--headline-weight-1);
                color: var(--grey-1);
            }
    }
    
`