import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Titlelink=({isHighLight,title,link}) =>{

    if(!link){
        return(
            <div className={`${isHighLight ? " text-primaryTitle":""}`}>{title}</div>
        )
    }
    return(
        <a href={link} target="_blank">
            <div className={`${isHighLight ? " text-primaryTitle":""}`}>{title}
                <FontAwesomeIcon className={`text-xs -rotate-45 ml-2 duration-200 ease-out ${isHighLight ? " translate-x-1 -translate-y-1":""}`} icon={faArrowRight} />
            </div>
        </a>
    )
}
export default Titlelink;