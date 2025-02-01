import { forwardRef } from "react"

function Input({
    type = "text", 
    placeholder,
    className,
    ...props
}, ref){
    return(
        <input 
            type = {type}
            placeholder={placeholder}
            className={`${className} w-[70%] mx-auto p-2  text-[14px] md:text-[1.5vw] bg-transparent rounded-md border border-[#aeaeae68] placeholder-[#aeaeae68] hover:placeholder-[#ffffffaa] hover:border-[#ffffffaa] outline-none`}
            {...props}
            ref={ref}
        />
    )
}

export default forwardRef(Input)