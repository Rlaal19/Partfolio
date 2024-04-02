import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Bar = () =>{
    return(
        <div className='flex flex-col gap-2 text-sm text-primarycontent font-mono font-bold'>
            <div> <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faFolderOpen} /> About</div>
            <div>  Experience</div>
            <div>  Project</div>
            <div>  Reward</div>
        </div>
    )
}
export default Bar;