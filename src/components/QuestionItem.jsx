export const QuestionItem = ({question, isHidden, icon}) => {
    return <div className="border-[1px] border-gray-400 rounded-lg p-2">
        <div className="flex justify-between">
            <div> <span> {icon} </span> <span>{question}</span> </div>
            <span>*</span>
        </div>

        <div>
            <button className="px-[10px] py-[2px] rounded-lg bg-green-500 mr-2 text-green-500">Fine</button>
            <button className="px-[10px] py-[2px] rounded-lg bg-red-500 mr-2 text-red-500">So-so</button>
            <button className={`px-[10px] py-[2px] rounded-lg bg-blue-500 mr-2 text-blue-500 ${isHidden}`}>Not well</button>
        </div>

        <div className="text-[14px] text-blue-500">Histore</div>
    </div>
}