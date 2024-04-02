import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Picture from "../picture";
import Titlelink from "../titlelink";
import Description from "../description";
import Skill from "../skill";

const ContentContrainer = ({
    title: sectionTitle = "",
    data = [],
}) =>{

    const [isMouseEnter, setIsMouseEnter] = useState({});
    const SECTION_ID = `${sectionTitle}-section`;

    return(
        <div id={SECTION_ID}>
            <div className=" bg-primaryTitle text-center text-primarysubtitle font-mono rounded-md py-1">{sectionTitle}</div>
            {
                data.map(({date,
                    title= "",
                    link= "",
                    description= [],
                    skills = [],
                    picture= ""},
                    index) => (

                    <div 
                        key={`${SECTION_ID}-${index}`}
                        className={`grid grid-cols-[25%_75%] font-mono rounded-md px-2 py-4 font-bold ${isMouseEnter[`${SECTION_ID}-${index}`]? " bg-slate-100" : ""}`}
                        onMouseEnter={() => setIsMouseEnter({[`${SECTION_ID}-${index}`] :true})}
                        onMouseLeave={() => setIsMouseEnter({[`${SECTION_ID}-${index}`] :false})}
                    >
                    <div>
                        <div className={` grid gap-2 ${isMouseEnter[`${SECTION_ID}-${index}`]? " text-primaryTitle" : ""}`}>
                            <span>{date}</span>
                        </div>
                        <Picture picture={picture}/>
                    </div>

                    <div className=" grid gap-y-2 ">
                        <Titlelink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link}/>
                        {
                            description.map((e,i) =>(
                                <Description key={`${e}-descript-${i}`} descript={e}/>
                            ))
                        }
                        {
                            skills.map((e,i) => (
                                <Skill key={`${e}-skill-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e}/>
                            ))
                        }
                    </div>
                </div>
                ))
            }
        </div>
)
}
export default ContentContrainer ;