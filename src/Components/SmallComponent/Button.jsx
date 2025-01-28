export function Button({
    type = "button", 
    icon,
    value="button", 
    className = "",
    text = "text-xl text-[#0e0e0e]",
    padding = "px-4 py-2"
}){
    return(
        <button 
            type={type}
            className={`${className} ${text} ${padding} font-medium cursor-pointer bg-[#c7ce00] to-[#00bfa5] hover:bg-[#f9ff3d] hover:scale-105 transition-all duration-500 ease-in-out rounded-lg block`}
        >
            {icon}{value}
        </button>
    )
}