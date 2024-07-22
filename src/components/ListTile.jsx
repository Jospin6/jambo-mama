export const ListTile = () => {
    return <div className="w-full flex items-center border-b-[1px] border-gray-300 h-[40px]">
        <div>
            <div className="w-[35px] h-[350px] rounded-full bg-gray-300"></div>
            <div className="text-[18px] text-gray-400">
                <div>{title} </div>
                <div className="text-[15px] text-gray-400"> {subtitle} </div>
            </div>
        </div>
        <div className="text-[15px] text-green-400"> icon </div>
    </div>
}