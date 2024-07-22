export const PragnentCard = ({semaine, src, children}) => {
    return <div className="w-full">
        <div className="w-full text-center py-2"> {semaine} </div>
        <div className="h-[300px] w-[200px] my-4">
            <img src={src} alt="immage femme" />
        </div>
        <div className="text-[16px] text-gray-500">
            {children}
        </div>
    </div>
}