import { MdWorkOutline, MdPeopleAlt } from "react-icons/md";
import { GiBrainTentacle, GiBrainstorm } from "react-icons/gi";
import { TbExchange } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";

const skill = [
    {
        id: 1,
        descripcion: 'Trabajo en equipo',
        icon: <MdWorkOutline />
    },
    {
        id: 2,
        descripcion: 'Proactivo',
        icon: <GiBrainTentacle />
    },    
    {
        id: 3,
        descripcion: 'Autodidacta',
        icon: <GiBrainstorm />
    },    
    {
        id: 3,
        descripcion: 'Resilencia',
        icon: <TbExchange />
    },    
    {
        id: 4,
        descripcion: 'Responsabilidad',
        icon: <IoMdTimer />
    },    
    {
        id: 5,
        descripcion: 'Liderazgo',
        icon: <MdPeopleAlt />
    }
]

export default skill;