import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PersonaliseInput = ({ labelText, id, fieldName, type, placeholder, onchange, value, src, flag }) => {
    return <div className="mt-2 border-[1px] border-gray-400 rounded-lg p-2">
        <label htmlFor={id} className="flex mb-[5px] bolder text-[16px]"> <img src={src} alt="image" className='w-[17px] h-[20px] mr-2' /> <span>{labelText}</span> </label>
        <div className="w-full border-b-[1px] border-gray-400 flex">
            <input
                id={id}
                name={fieldName}
                type={type}
                placeholder={placeholder}
                className="w-[90%] h-[35px] pl-2 outline-none text-black"
                onChange={onchange}
                value={value} />

            <span> {flag} </span>
        </div>
        <div className="text-[14px] text-blue-500">Histore</div>
    </div>
}