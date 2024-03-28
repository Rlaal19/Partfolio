import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  return (
    <div className='mt-10 mx-auto max-w-6xl grid grid-cols-[35%_65%]'>
      <div>
        <div className='sticky top-14 grid grid-rows-[30%_50%_20%] h-[90vh]'>
          <div className=' flex flex-col gap-1' >Title
            <div className='text-3xl text-primaryTitle font-extrabold'>Parichaya Nasomdang</div>
            <div className='text-sm text-primarycontent font-mono'>23 January 2003</div>
            <div className='text-sm w-5/6 text-primarycontent font-mono'>Study: CHITRALADA TECHNOLOGY INSTITUTE Major: Computer Engineering</div>
            <div className='mt-2'>
            <span className=' rounded-md bg-primaryTitle text-slate-100 py-2 px-5'>View Resume
            <FontAwesomeIcon icon="fa-solid fa-file" />
            </span>
            </div>
          </div>
          <div>Bar</div>
          <div className='flex items-end'>contact</div>
        </div>
      </div>

      <div>
        <div>about</div>
        <div className='mb-96'>experience</div>
        <div className='mb-96'>experience</div>
        <div className='mb-96'>experience</div>
      </div>
    </div>
  )
}

export default App
