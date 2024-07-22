export const PopupCard = ({title, text}) => {
    return <div className="w-full h-[100vh] blackBgWithOpacity flex justify-center items-center">
        <div className="min-h-[250px] h-auto w-[400px] bg-white rounded-lg px-4 relative">
            <div> {title} </div>
            <div> {text} </div>
            <div className="flex justify-end w-full absolute bottom-[10px] left-[10px]">
                <button className="text-red-500">D'accord</button>
            </div>
        </div>
    </div>
}