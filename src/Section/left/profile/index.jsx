import picpro from "../../../assets/Profile.jpg"

const Profile =() =>{
    return(
        <div className="flex items-center justify-center">
            <img className=" object-cover max-h-60 lg:h-full " src={picpro} />
        </div>

    )
}
export default Profile;