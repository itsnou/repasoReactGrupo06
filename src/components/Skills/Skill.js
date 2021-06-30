const Skill = ({datos}) =>{
    console.log(datos)
    return(
        <div className='card'>
            <h4>{datos.title}</h4>
            {datos.description.map((el,id)=> <li key={id}>{el}</li>)}
        </div>
    )
}


export default Skill;