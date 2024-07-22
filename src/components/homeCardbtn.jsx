export const HomeCardbtn = ({children, text, onclick}) => {
    return <div className="h-[300px] flex justify-center items-center col-span-2 rounded-lg bg-blue-500 px-6 text-white shadow" onClick={onclick}>
        <div>
            <div className="flex justify-center text-[60px] pb-[20px]"> {children} </div>
            <div className="flex justify-center text-center"> {text} </div>
        </div>
    </div>
}