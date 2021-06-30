import style from 'styled-components';


const Perro = style.div`
    display:grid;
    grid-template-columns: 1fr 1fr;

    .header-img{
        width: 350px;
        margin-top:30px;
        margin:30px auto;
        img{
            width:100%;
            border-radius: 50%;
        }
    }

    .header-info{
        font-size:25px;
        font-weight:bold;
    }
`

export default Perro