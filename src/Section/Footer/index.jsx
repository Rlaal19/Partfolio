import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer =() =>{
    return(
        <div className=" mb-9">
            <span>
                <div className=" flex justify-end font-mono">Powered by React.js and Tailwin
                <FontAwesomeIcon className="ml-2" icon={faGithub} />
                </div>
            </span>
        </div>
    )
}
export default Footer;