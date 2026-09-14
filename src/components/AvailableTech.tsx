import type { Dispatch, SetStateAction } from "react";
import type Itech from "../TechType";
import TechCard from "./TechCard";

interface IAvailableTech {
    technologies : Itech[];
    selectedTech: Itech[];
    setSelectedTech: Dispatch<SetStateAction<Itech[]>>;
}


const AvailableTech = ({technologies, selectedTech, setSelectedTech}:IAvailableTech) => {
    
    return (
        <div className="grid md:col-span-2 lg:col-span-3 gap-4 md:gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                technologies.map((technology: Itech) =>{
                    return  <TechCard key={technology.id} selectedTech={selectedTech} setSelectedTech={setSelectedTech} technology={technology}/>
                })
            }
            
        </div>
    );
};

export default AvailableTech;