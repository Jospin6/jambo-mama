export const MenuItem = ({title, children}) => {
    return <div className="h-[40px] text-red-500 text-[16px] cursor-pointer mb-2 hover:bg-gray-200 flex items-center">
        <div className="mr-4 ml-2"> {children} </div>
        <div> {title} </div>
    </div>
}