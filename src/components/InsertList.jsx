
import { IoChevronForward} from "react-icons/io5";
import knowledge from "../components/tools/knowledge";
import skill from "../components/tools/skill";

export const InsertListKnowledge = () => {
    return (
        knowledge.map((knowledge) => {              
            return (
                <ul class="pt-2">
                    <li key={knowledge.id} class="flex gap-2 items-justify items-center"><IoChevronForward />{knowledge.descripcion}</li>
                </ul>
            )        
        })
    )
}

export const InsertListSkill = () => {
    return (
        skill.map((skill) => {  
            return (
                <ul class="pt-2">
                    <li key={skill.id} class="flex gap-2 items-center">{skill.icon}{skill.descripcion}</li>
                </ul> 
            )        
        })
    )
}