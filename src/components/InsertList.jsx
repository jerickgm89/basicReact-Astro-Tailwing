import knowledge from "../components/tools/knowledge";
import skill from "../components/tools/skill";
import iconrow from '../img/icons/white-chevron.svg';

export const InsertListKnowledge = () => {
    return (
        knowledge.map((knowledge) => {              
            return (
                <ul class="pt-2">
                    <li key={knowledge.id} class="flex gap-2 items-justify items-center text-lg">
                        <img src={iconrow} alt="iconrow" class="w-3" />
                        {knowledge.descripcion}
                        </li>
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
                    <li key={skill.id} class="flex gap-3 items-center">
                    <img src={iconrow} alt="iconrow" class="w-3" />
                        {skill.descripcion}
                    </li>
                </ul> 
            )        
        })
    )
}