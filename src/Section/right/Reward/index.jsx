import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reward = () =>{
    return(
        <div className="grid grid-rows-[40%_60%] space-y-3">
            <div className=" font-mono bg-primaryTitle text-primarybg rounded-lg text-center">Reward
            <FontAwesomeIcon className="animate-bounce ml-2" icon={faAward} size="lg" />
            </div>
            
        </div>
    )
}
export default Reward;