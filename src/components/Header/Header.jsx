import image from '../../images/El arte es una cosa extraña.png'
import Perro from './styled'

const Header = ({datos}) =>{
    console.log(Object.values(datos))
    return(
        <Perro>
            <div className='header-img'>
                <img src={image} alt='imagen de un artista'/>
            </div>
            <div className='header-info'>
                {
                    Object.values(datos).map(el => {
                        return Array.isArray(el) ? false : <p>{el}</p>
                    })
                }
            </div>
        </Perro>
    )
}

export default Header;