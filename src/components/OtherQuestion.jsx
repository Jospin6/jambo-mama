export const OtherQuestion = ({question}) => {
    return <div className="border-[1px] border-gray-400 rounded-lg p-2">
        <div className="flex justify-between">
            <span> {question} </span>
            <span>*</span>
        </div>

        <div className="min-h[80px] h-auto">
            <input type="text" className="w-full h[80px]" />
        </div>

        <div className="text-[14px] text-blue-500">Histore</div>
    </div>
}