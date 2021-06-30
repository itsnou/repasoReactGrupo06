import Skill from './Skill'
import Perro from './styled'

const Skills = ({skills}) =>{
    return(
        <Perro>
            {
                skills && skills.map(el=>{
                    return <Skill datos={el}/>
                })
            }
        </Perro>
    )
}

export default Skills;