export const NeutreCard = ({className, title, hidden, children}) => {
    return <>
        <div className={`text-gray-400 ${hidden}`}> {title} </div>
        <div className={`border-[1px] border-gray-400 rounded-lg ${className}`}>
            {children}
        </div>
    </>
}