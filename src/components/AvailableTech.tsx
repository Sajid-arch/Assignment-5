import type Itech from "../TechType";
import TechCard from "./TechCard";



const AvailableTech = ({technologies}: { technologies: Itech[] }) => {
    
    return (
        <div className="grid col-span-3 gap-4 grid-cols-3">
            {
                technologies.map((technology: Itech, index:number) =>{
                    return  <TechCard key={index} technology={technology}/>
                })
            }
            
        </div>
    );
};

export default AvailableTech;