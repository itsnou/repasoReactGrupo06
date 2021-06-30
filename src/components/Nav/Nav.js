import StyledDiv from './style';

const Nav = () =>{
    return(
        <StyledDiv>
            <h1 className='LOGO'>LOGO</h1>

            <div className='container'>
                <ul className='list-nav'>
                    <li>Sobre Mi</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
        </StyledDiv>
    )
}

export default Nav;