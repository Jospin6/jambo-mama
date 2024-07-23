export const SubmitButton = ({text, className}) => {
    return <button 
        type="submit" 
        className={`py-[5px] bg-red-500 mt-4 
        rounded-md text-white text-[16px] ${className}`}>
        { text }
    </button>
}