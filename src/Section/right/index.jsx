import ContentContrainer from "../../component/ContentContrainer";
import Footer from "../Footer";
import About from "./About";
import {data as experienceData} from '../../content/experience'
import {data as projectData} from '../../content/project'
import {data as rewardData} from '../../content/reward'

const RightSection =({ onInitial}) => {
    return(
        <div className='grid gap-y-10 px-3'>
            <About
                title = "About"
                onInitial = {onInitial}
            />

            <ContentContrainer 
            onInitial = {onInitial}
            title='Experience' 
            data={experienceData}
            />

            <ContentContrainer 
            onInitial = {onInitial}
            title='Project'
            data={projectData}
            />

            <ContentContrainer 
            onInitial = {onInitial}
            title='Reward'
            data={rewardData}
            />

            <Footer/>
        </div>
    )
}
export default RightSection;