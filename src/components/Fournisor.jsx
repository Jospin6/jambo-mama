export const Fournisor = ({children}) => {
    return <div className="border-[1px] border-gray-300 p-2">
        <div className="flex justify-center my-4">
            <span className="w-[50px] h-[50] rounded-full bg-gray-600"></span>
        </div>
        <div className="text-[16px] text-red-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, obcaecati est tempora similique 
            veritatis odit ipsa mollitia adipisci commodi neque iusto dolore, 
            expedita soluta eum aspernatur nobis consequatur voluptatum asperiores?
        </div>

        <div className="border-[1px] border-gray-300 p-2">
            <div className="flex justify-between text-[18px]">
                <div className="w-[60%] text-gray-400">Nom:</div>
                <div className="w-[40%] text-black">Jules Nzanzu</div>
            </div>
            <div className="flex justify-between text-[18px]">
                <div className="w-[60%] text-gray-400">Titre post:</div>
                <div className="w-[40%] text-black">Community</div>
            </div>
            <div className="flex justify-between text-[18px]">
                <div className="w-[60%] text-gray-400">Région/Province/(RD Congo):</div>
                <div className="w-[40%] text-black">Sud-kivu</div>
            </div>
        </div>

        <div className="mt-6 flex justify-end">
            {children}
        </div>

    </div>
}