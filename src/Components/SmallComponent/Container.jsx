
export function Container ({children, className, id = ""}) {
    return(
        <div id={id} className={`${className} px-[10px] sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[60px] 2xl:px-[80px] pb-16 blockBox `}>
            {children}
        </div>
    )
}