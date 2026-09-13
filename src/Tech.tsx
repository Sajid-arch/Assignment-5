import { use } from "react";
import type Itech from "./TechType";
import AvailableTech from "./components/AvailableTech";

interface TechProps{
 techPromise: Promise<Itech[]>;
}

const Tech = ({techPromise}:TechProps) => {


    const techs = use(techPromise);
    return (
        
            <section className="px-6 pb-30 md:px-15 lg:px-30">
                        <div className="container mx-auto">
                            <h2 className="font-extrabold font-inter pb-4 text-2xl md:text-3xl lg:text-4xl text-[#0F172A]">Explore the <span className="text-transparent bg-clip-text bg-linear-to-r from-[#EC4899] from-0% to-[#8B5CF6] to-100%">Technologies</span></h2>
                            <p className="font-jakarta text-[#64748B] font-normal text-xs md:text-sm lg:text-[16px]">Pick one technology per category to build your ideal stack.</p>
                            <div className="pt-15 grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <AvailableTech technologies={techs}/>
                                    <div className="p-5 border-2 font-jakarta border-[#F1F5F9] rounded-2xl space-y-3 max-h-50">
                                        <h4 className="font-bold text-[16px] text-[#0F172A]">Your Stack</h4>
                                        <p className="font-normal text-xs text-[#94A3B8]">No technologies selected yet</p>
                                        <div className="flex justify-center items-center p-6 rounded-xl border-2 border-dashed border-[#E2E8F0]">
                                            <p className="font-normal text-xs text-[#94A3B8]">Your stack is empty</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </section>
        
    );
};

export default Tech;