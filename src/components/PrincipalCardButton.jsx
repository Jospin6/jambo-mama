export const PrincipalCardButton = ({text, className, children}) => {
    return <div className={`h-[200px] flex justify-center items-center ${className}`}>
        <div className="text-white">
            <div>{children}</div>
            <div> {text} </div>
        </div>
    </div>
}