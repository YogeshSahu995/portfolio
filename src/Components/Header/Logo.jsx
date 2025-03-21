export function Logo({className = ""}){
    return (
        <div 
        className={`${className} h-[40px] w-[40px] rounded-full grayscale-[70%] hover:grayscale-0 hover:cursor-pointer bg-[#000] boxShadow ease-in duration-200`}>
            <img 
            src="./images/LOGO.png" 
            alt="logo"
            loading="lazy"
            className="object-cover object-center h-full w-full"
            />
        </div>
    )
}