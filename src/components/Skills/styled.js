import style from 'styled-components';


const Perro = style.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:2rem;
    .card{
        border:1px solid red;
    }
`

export default Perro;