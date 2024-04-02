import { faFile, faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import './App.css'
import Header from './Section/left/Header'
import Bar from './Section/left/Bar'
import Contact from './Section/left/Contact'
import About from './Section/right/About'
import Project from './Section/right/Project'
import Reward from './Section/right/Reward'
import Profile from './Section/left/profile'
import {data as experienceData} from '../src/content/experience'
import {data as projectData} from '../src/content/project'
import {data as rewardData} from '../src/content/reward'
import ContentContrainer from './component/ContentContrainer'
import Footer from './Section/Footer'

function App() {

  return (
    <div className='mt-10 mx-auto max-w-6xl grid lg:grid-cols-[35%_65%]'>
      <div>
        {/* Section Left */}
        <div className=' px-2'>
          <div className='sticky top-14 grid gap-4 lg:grid-rows-[30%_25%_25%_10%] h-[90vh]'>
            <Profile/>
            <Header/>
            <Bar/>
            <Contact/>
            
          </div>
        </div>
      </div>



      {/* Section Right */}
      <div className='grid gap-y-4 px-2'>
        <About/>
        <ContentContrainer 
        title='Experience' 
        data={experienceData}
        />

        <ContentContrainer 
        title='Project'
        data={projectData}
        />

        <ContentContrainer 
        title='Reward'
        data={rewardData}
        />
        

        <Footer/>
      </div>
    </div>
  )
}

export default App
