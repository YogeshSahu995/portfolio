export function SkillCard ({icon, name}) {
    return (
        <div className="min-w-[10vw] p-2 bg-[#02020239] rounded-lg skillCard">
            <img 
                src={icon} 
                alt={name} 
                loading="lazy"
                className="h-[6vh] md:h-[5vw] w-fit object-cover object-center mx-auto mb-2" 
            />
            <p className="text-[18px] md:text-[1.4vw]">{name}</p>
        </div>
    )
}