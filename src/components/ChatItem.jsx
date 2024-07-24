export const ChatItem = ({userName, role}) => {
    return <div className="w-full flex border-b-[1px] border-gray-300">
        <div className="w-[35px] h-[35px] rounded-full bg-gray-300"></div>
        <div className="pl-2">
            <div className="text-[14px] text-gray-400"> {userName} </div>
            <div className="text-[12px] text-gray-400"> {role} </div>
        </div>
    </div>
}