import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header =() =>{
    return(
        <div className=' flex flex-col gap-2' >
            <div className='text-3xl text-primaryTitle font-extrabold'>Parichaya Nasomdang</div>
            <div className='text-sm text-primarycontent font-mono font-bold'>23 January 2003</div>
            <div className='text-sm w-5/6 text-primarycontent font-mono font-bold'>Study: CHITRALADA TECHNOLOGY INSTITUTE</div>
            <div className='text-sm w-5/6 text-primarycontent font-mono font-bold'>Major: Computer Engineering</div>
            <div className='mt-2'>

            <a href={"#"}>
                <span className=' rounded-md bg-primaryTitle text-primarysubtitle py-2 px-5'>View Resume
                    <FontAwesomeIcon className = ' animate-bounce ml-2' icon={faFile} size="lg" style={{color: "#FFF7FC",}} />
                </span>
            </a>
          </div>
        </div>
    )
}
export default Header;