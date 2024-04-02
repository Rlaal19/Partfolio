import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project =() =>{
    return(
        <div className="grid grid-rows-[40%_60%] space-y-3">
            <div className=" font-mono bg-primaryTitle text-primarybg rounded-lg text-center">Project
            <FontAwesomeIcon className="animate-bounce ml-2" icon={faPenToSquare} size="lg" />
            </div>
        </div>
    )
}
export default Project;