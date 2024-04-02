import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const nav = [
    {title:"About",sectionId:"About_section"},
    {title:"Experience",sectionId:"Experience_section"},
    {title:"Project",sectionId:"Project_section"},
    {title:"Reward",sectionId:"Reward_section"},

]
const Bar = ({navBarItems, currentSection}) =>{
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const handleClick = (sectionId) =>{
        console.log(sectionId);
        document.getElementById(sectionId).scrollIntoView({behavior: "smooth"});
    }
    return(
        <div>
            <div className='flex flex-col text-sm text-primarycontent font-mono font-bold'
            >
                {
                    navBarItems.map((e,i) => (
                        <div 
                            key={`nav-${e}-${i}`}
                            onClick={() => handleClick(e.sectionId)}
                            onMouseEnter={() => setIsMouseEnter({[e.title]: true})}
                            onMouseLeave={() => setIsMouseEnter({[e.title]: false})}
                            className=" cursor-pointer flex py-2"
                        >
                            <div>
                                <FontAwesomeIcon className= {` new-show ${currentSection === e.sectionId? "text-primaryTitle": isMouseEnter[e.title]? "": "hidden" }`} icon={faFolderOpen} />
                            </div>
                                <div className={`${currentSection === e.sectionId || isMouseEnter[e.title]? "text-primaryTitle translate-x-2":""} duration-500 ease-out`} icon={faFolderOpen}>{e.title}</div>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Bar;