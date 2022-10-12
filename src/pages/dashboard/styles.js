import styled from "styled-components";


export const StyledDashboard = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
   
        nav{
        
        padding: 1rem;
        border-bottom: 1px solid var(--grey-3);
        height: 10%;
        min-height: 70px;
        div{
        display: flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        @media(min-width: 1024px){
            margin: 0 auto;
            width: 80%;
        }
            img{
                height: 14px;
            }
        }
    
    
        @media(min-width: 1024px){
            justify-content: space-around;
        }
    }
    header{
        
        padding: 1rem;
        border-bottom: 1px solid var(--grey-3);
        height: 15%;
        min-height: 125px;
        margin-bottom: 2rem;
        div{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            gap: 1rem;
            flex-direction: column;
            
            @media(min-width: 1024px){
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            width: 80%;
            margin: 0 auto;
        }
            h1{
            font-size: var(--title-size-1);
            color: var(--grey-0);
            font-weight: var(--title-weight-1)
        }
        p{
            font-size:12px;
            color: var(--grey-2);
            font-weight: var(--headline-weight-1)
        }

        }

        @media(min-width: 1024px){
            justify-content: space-around;
            flex-direction: row;
            align-items: center;
        }
    }
    main{
        height: 75%;
        padding: 1rem;
        color: var(--grey-0);
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h2{
            font-size: var(--title-size-1);
            color: var(--grey-0);
            font-weight: var(--title-weight-1)
        }
        h3{
            font-size:12px;
            color: var(--grey-0);
            font-weight: var(--headline-weight-1)
        }
        @media(min-width: 1024px){
            margin: 0 auto;
            width: 80%;
            text-align: left;
            h2, h3{
                width: 100%
            
            }
        }
    }

`
export const StyledModal = styled.section `
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    background-color: #12121450;
div{
    max-width: 370px;
    max-height: 370px;
    display: flex;
    width: 80%;
    height: 80%;
    flex-direction: column;
    background-color: var(--grey-3);
    border-radius: var(--border-radius);
    header{
        min-height:initial ;
        height:20%;
        display: flex;
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        background-color: var(--grey-2);
        width: 100%;
        justify-content: space-between;
        margin-bottom: 0;
        align-items: center;
        h2{
            color: var(--grey-0);
        font-size: var(--headline-size-1);
        }
        button{
            background-color: transparent;
            border: none;
            color: var(--grey-1);
            font-size: 20px;
        }
    }
    main{
        width: 100%;
        height: 80%;
        form{
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            label{
                    font-size: 9px;
                    font-weight: var(--headline-weight-1);
                    text-align: left;
                    width: 100%;
                }
                .error {
                font-size: 10px;
                color: var(--negative);
                }
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

            }
    }
}
`