import type { Dispatch, SetStateAction } from "react";
import type Itech from "../TechType";
import TechCard from "./TechCard";

interface IAvailableTech {
    technologies : Itech[];
    selectedTech: Itech[];
    setSelectedTech: Dispatch<SetStateAction<Itech[]>>
}


const AvailableTech = ({technologies, selectedTech, setSelectedTech}:IAvailableTech) => {
    
    return (
        <div className="grid col-span-3 gap-4 grid-cols-3">
            {
                technologies.map((technology: Itech, index:number) =>{
                    return  <TechCard selectedTech={selectedTech} setSelectedTech={setSelectedTech} index ={index} technology={technology}/>
                })
            }
            
        </div>
    );
};

export default AvailableTech;