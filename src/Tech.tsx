import { use, useState } from "react";
import type Itech from "./TechType";
import AvailableTech from "./components/AvailableTech";
import SelectedTech from "./components/SelectedTech";

interface TechProps{
 techPromise: Promise<Itech[]>;
}

const Tech = ({techPromise}:TechProps) => {

    const [selectedTech, setSelectedTech] = useState<Itech[]>([]);
    // const handleRemove = (name:string) => {
    //     setSelectedTech((previous:Itech[]) => 
    // }
    // const handleRemoveAll = () => {setSelectedTech([])};


    const techs = use(techPromise);
    return (
        
            <section className="px-6 pb-30 md:px-15 lg:px-30">
                        <div className="container mx-auto">
                            <h2 className="font-extrabold font-inter pb-4 text-2xl md:text-3xl lg:text-4xl text-[#0F172A]">Explore the <span className="text-transparent bg-clip-text bg-linear-to-r from-[#EC4899] from-0% to-[#8B5CF6] to-100%">Technologies</span></h2>
                            <p className="font-jakarta text-[#64748B] font-normal text-xs md:text-sm lg:text-[16px]">Pick one technology per category to build your ideal stack.</p>
                            <div className="pt-15 grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <AvailableTech selectedTech={selectedTech} setSelectedTech={setSelectedTech} technologies={techs}/>
                                    <SelectedTech selectedTech={selectedTech} setSelectedTech={setSelectedTech}/>
                                    
                            </div>
                        </div>
                    </section>
        
    );
};

export default Tech;