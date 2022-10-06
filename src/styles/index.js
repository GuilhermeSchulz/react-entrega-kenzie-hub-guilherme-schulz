import {
    createGlobalStyle
} from "styled-components";

export const GlobalStyles = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    list-style:none;
    box-sizing: border-box;
}
button{
    cursor: pointer;
    transition: .5s;
}


:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;


    --negative: #3FE864;
    --success: #E83F5B;

    --background-color: #121214;    

    --title-size-1: 16px; 
    --title-weight-1: 700;
    --title-size-2: 16px;
    --title-size-3: 16px;
    --headline-size-1: 16px;
    --headline-weight-1: 400;
    --headline-size-2: 14px;
    --headline-weigth-2: 700;
    --headline-size-3: 12px;
    --headline-style-3: italic;

    --border-radius: 8px;
    --shadow: 0px 3.208672046661377px 32.08671951293945px -8.021679878234863px #00000040;

}

`