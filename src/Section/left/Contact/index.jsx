import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {data} from "../../../content/contact"

const Contact = () => {
    return(
        
        <><div className='flex items-end font-mono font-bold text-primaryTitle'>contact</div>
        <div className='flex gap-3 text-2xl'>
            <a href={data.facebook} target=" _blank"><FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faFacebook} /></a>
            <a href={data.ig} target="_blank"><FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faInstagram} /></a>
            <a href={data.git} target="_blank"><FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} /></a>
            <a href= {data.linkedin} target="_blank"><FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin} /></a>
        </div></>
        
    )
}
export default Contact;