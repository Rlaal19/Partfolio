import Bar from "./Bar";
import Contact from "./Contact";
import Header from "./Header";
import Profile from "./profile";

const LeftSection =({navBarItems, currentSection}) =>{
    return(
        <div className=' px-2'>
          <div className='sticky top-14 grid gap-4 lg:grid-rows-[30%_1fr_1fr_10%] lg:h-[86vh]'>
            <Profile/>
            <Header/>
            <Bar navBarItems = {navBarItems} currentSection = {currentSection} />
            <Contact/>
            
          </div>
        </div>

    )
}
export default LeftSection;