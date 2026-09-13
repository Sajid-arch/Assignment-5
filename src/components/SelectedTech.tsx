import type { Dispatch, SetStateAction } from "react";
import type Itech from "../TechType";
// import Tech from "../Tech";
import { RxCross2 } from "react-icons/rx";

interface ISelectedTech {
    selectedTech: Itech[];
    setSelectedTech : Dispatch<SetStateAction<Itech[]>>
}

const SelectedTech = ({selectedTech , setSelectedTech}:ISelectedTech) => {
    console.log(selectedTech, 'From Stack')
    return (
        <div className="p-5 border-2 font-jakarta border-[#F1F5F9] rounded-2xl space-y-3 self-start h-fit transition-all ease-in-out duration-500">
                                        <h4 className="font-bold text-[16px] text-[#0F172A]">Your Stack</h4>
                                        <p className="font-normal text-xs text-[#94A3B8]">{selectedTech.length === 0 ? "No technologies selected yet" : selectedTech.length > 1 ?`${selectedTech.length} technologies added`:"1 technology added"  }</p>
                                        <div className={`${selectedTech.length > 0 ? "border-0 p-0 ":"border-2 p-6"} transition-all ease-in-out duration-500 flex flex-col space-y-2 justify-center items-center rounded-xl  border-dashed border-[#E2E8F0]`}>
                                            <p className={`${selectedTech.length > 0 ? "hidden" : "flex"} transition-all ease-in-out duration-500 font-normal text-xs text-[#94A3B8]`}>Your stack is empty</p>
                                            
                                                {
                                                    selectedTech.map((technology)=> {
                                                        return <div className={`${selectedTech.length > 0 ? "flex" : "hidden"} w-full border-2 border-[#F1F5F9] rounded-xl px-3 py-2 justify-between items-center flex-row`}><div className="flex flex-row justify-center items-center">
                                                            <img className="w-7 h-7" src={technology.logo} alt={technology.name} />
                                                            <div className="ms-2">
                                                                <h4 className="text-xs text-black font-semibold">{technology.name}</h4>
                                                                <p className="text-[6px] text-[#475569]">{technology.category}</p>
                                                            </div>
                                                        </div>
                                                <span><RxCross2 /></span>
                                                
                                            </div>
                                                    })
                                                }
                                        </div>
                                    </div>
    );
};

export default SelectedTech;