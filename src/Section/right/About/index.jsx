import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const About =({onInitial,title = ""}) =>{
    const SECTION_ID = `${title}_section`;
    useEffect(() =>{
        onInitial(SECTION_ID);
    },[])
    return(
        <div className=" space-y-3 scroll-m-14" id={SECTION_ID}>
            <div className=" text-primarysubtitle text-center bg-primaryTitle rounded-md font-mono py-1">About Me
            <FontAwesomeIcon className="animate-bounce ml-2" icon={faCircleUser} /></div>
            <div className=" text-primarycontent font-mono font-bold ">Hi my name is al ^^</div>
            <div className=" text-primarycontent text-clip font-mono font-bold ">Currently, I am a student at the Faculty of Digital Technology, majoring in Computer Engineering at Jittrada Institute 
            of Technology. Lately, I have developed a keen interest in studying and enhancing my skills in JavaScript. Additionally, I am proficient in programming 
            with other languages such as C, Python, and Ruby. In my free time, I enjoy exploring new things and cooking is one of my favorite hobbies.</div>
        </div>
    )
}
export default About;