export const homeCardbtn = ({icon, text, onclick}) => {
    return <div className="h-[300px] rounded-lg bg-blue-500 text-white shadow" onClick={onclick}>
        <div className="flex justify-center"> {icon} </div>
        <div className="flex justify-center"> {text} </div>
    </div>
}