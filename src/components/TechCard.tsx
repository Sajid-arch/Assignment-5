import { FaStar } from "react-icons/fa";
import { type Dispatch, type SetStateAction } from "react";
import type Itech from "../TechType";
import { Bounce, toast } from "react-toastify";

interface ITechCard{
    technology: Itech;
    selectedTech: Itech[];
    setSelectedTech: Dispatch<SetStateAction<Itech[]>>;
}


const TechCard = ({technology, selectedTech, setSelectedTech }: ITechCard) => {
    const isAdded = selectedTech.some(selectedOne => selectedOne.name === technology.name)

    const handleAdd = () =>{
        setSelectedTech([...selectedTech , technology])

    toast.success(`${technology.name} is added to stack.`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Bounce,
});



    }
    return (
        <div className="p-5 md:p-3 lg:p-5 border-2 font-jakarta border-[#F1F5F9] rounded-2xl space-y-4 md:space-y-3 lg:space-y-4 transition-all ease-in-out duration-500 hover:shadow-2xl hover:-translate-1">
        
                                <div className="flex flex-row justify-between items-center">
                                    <img className="w-8 h-8" src={technology.logo} alt={technology.name} />
                                    <span className="rounded-full text-[11.5px] md:text-[9px] lg:text-[11.5px] font-semibold px-3 py-1" style={{backgroundColor:technology.badgeBg,color:technology.badgeText}}>{technology.badge}</span>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <h4 className="text-lg md:text-sm lg:text-lg font-bold text-[#0F172A]">{technology.name}</h4>
                                    <p className="text-xs md:text-[10px] lg:text-xs font-normal text-[#64748B]">{technology.description}</p>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                    <span className="bg-[#F1F5F9] text-[#475569] text-[11px] md:text-[8px] lg:text-[11px] font-medium px-2 py-0.5 rounded-sm">{technology.category}</span>
                                    <span className="font-medium text-[11px] md:text-[8px] lg:text-[11px] text-[#64748B]">{technology.difficulty}</span>
                                    <div className="flex items-center justify-between"><span className="text-[#FBBF24]  text-[12px] md:text-[9px] lg:text-[12px]"><FaStar /></span><span className="text-[#334155] font-semibold text-[11px] md:text-[8px] lg:text-[11px]">{technology.rating}</span></div>
                                </div>
                                <button onClick={()=>handleAdd()} disabled={isAdded} className={`${isAdded?' text-black':'bg-[#0A0F1D] text-white'} cursor-pointer border-2 border-black transition-all ease-in-out duration-500 rounded-lg w-full text-xs font-medium py-3 md:py-1.5 lg:py-3`}>{isAdded === true ? "Added" : "Add to Stack"}</button>
                            </div>
    );
};

export default TechCard;