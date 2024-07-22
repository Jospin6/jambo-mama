export const HorizontalCard = ({bg, icon, text}) => {
    return <div className={`text-white rounded-lg flex justify-center items-center min-h-[150px] h-auto ${bg}`}>
        <div className="flex">
            <span className={`${icon}`}></span>
            <span className="w-[80px] h-auto"> {text} </span>
        </div>
    </div>
}