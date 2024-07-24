export const PrincipalCardButton = ({text, className, children}) => {
    return <div className={`h-[200px] flex justify-center rounded-lg items-center ${className}`}>
        <div className="text-white">
            <div className="flex justify-center text-2xl">{children}</div>
            <div> {text} </div>
        </div>
    </div>
}