export const ChatItem = ({userName, role}) => {
    return <div className="w-full flex">
        <div className="w-[50px] h-[50px] rounded-full bg-gray-300"></div>
        <div>
            <div className="text-[18px] text-gray-400"> {userName} </div>
            <div className="text-[15px] text-gray-400"> {role} </div>
        </div>
    </div>
}