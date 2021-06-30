import style from 'styled-components';

const StyledDiv = style.div`
    border:1px solid black;
    display:flex;
    justify-content: space-around;

    .LOGO{
        color:red;
    }

    .container{
        border:1px solid black;
        .list-nav{
            display:flex;
            list-style:none;
            li{
                margin:5px;
                cursor:pointer;
            }
        }
    }
`


export default StyledDiv;