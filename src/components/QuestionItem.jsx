export const QuestionItem = ({question, isHidden, icon, otherText}) => {
    return <div className="border-[1px] border-gray-400 rounded-lg p-2 mb-2">
        <div className="flex justify-between text-[14px]">
            <div> <span> {icon} </span> <span>{question}</span> </div>
            <span>*</span>
        </div>

        <div className="pt-2">
            <button className="px-[10px] py-[2px] border-[1px] border-green-500 rounded-lg mr-2 text-green-500 text-[14px]">Fine</button>
            <button className="px-[10px] py-[2px] border-[1px] border-red-500 rounded-lg mr-2 text-red-500 text-[14px]">So-so</button>
            <button className={`px-[10px] py-[2px] border-[1px] border-blue-500 rounded-lg mr-2 text-blue-500 text-[14px] ${isHidden}`}>{otherText}</button>
        </div>

        <div className="text-[12px] text-blue-500">Histore</div>
    </div>
}