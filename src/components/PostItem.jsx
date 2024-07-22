export const PostItem = ({title,hidePhoto,children}) => {
    return <>
        <div className="text-gray-400 font-bold text-2xl"> {title} </div>
        <div className={`w-full h-[400] bg-Red-600 ${hidePhoto}`}>

        </div>
        <div className="text-gray-400 text-[16px]">
            {children}
        </div>
        <div className="w-full h-[40px] text-white rounded-lg bg-blue-500 flex items-center">
            icon Retourner aux instructions
        </div>
    </>
}