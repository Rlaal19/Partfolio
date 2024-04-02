const Skill=({isHighLight,data}) =>{
    return(
        <div>
            <div className=" flex gap-3 py-1 text-sm">
                {
                    data.map((d, i) => (
                        <div key={`${d}--${i}`} className = {`bg-primarybotton font-mono font-bold px-2 py-1 rounded-md ${isHighLight ? " text-primaryTitle" : ""}`}>{d}</div>
                    ))
                }
            </div>
        </div>
    )
}
export default Skill;