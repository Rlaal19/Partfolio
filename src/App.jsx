import { faFile, faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import './App.css'
import { useEffect, useState } from 'react'
import RightSection from './Section/right'
import LeftSection from './Section/left'

function App() {

  const[sectionIds, setSectionIds] = useState([]);
  const[navBarItems, setNevbarItems] = useState([]);
  const[currentSection, setCurrentSection] = useState("");

  const addSectionId =(sectionId) =>{
    const elementId = document.getElementById(sectionId).id
    setSectionIds((prev)=>[...new Set([...prev, elementId])]);

    const elementTitle = document.getElementById(sectionId).childNodes[0].textContent
    const obj = {title: elementTitle, sectionId: elementId}
    setNevbarItems((prev) => {
      if(prev.findIndex(e => e.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    });
  }

  const handleScroll = () =>{
    for (let index =0; index < sectionIds.length; index++){
      const element = sectionIds[index];
      const y = document.getElementById(element).getClientRects()[0].y;
      const high = document.getElementById(element).getClientRects()[0].height * 0.5;
      const viewHigh = window.innerHeight * 0.3;

      if(y <= 0){
        if(y+high > viewHigh){
          setCurrentSection(element)
        }
      }
      else if(y > 0 && y < viewHigh){
        setCurrentSection(element)
      }
    }

  }
  useEffect(() =>{
    if(sectionIds.length > 0){
      setCurrentSection(sectionIds[0]);
    }
  },[sectionIds])

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll);

    return() =>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  return (
    <div className='mt-10 mx-auto max-w-6xl grid lg:grid-cols-[35%_65%]'>
      <LeftSection navBarItems = {navBarItems} currentSection = {currentSection}/>
      <RightSection onInitial = {addSectionId}/>
    </div>
  )
}

export default App
