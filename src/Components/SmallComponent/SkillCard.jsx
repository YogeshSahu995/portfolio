export function SkillCard ({icon, name}) {
    return (
        <div className="min-w-[10vw] p-2 bg-[#02020239] rounded-lg skillCard">
            <img src={icon} alt={name} className="h-[6vh] md:h-[5vw] w-fit object-cover object-center mx-auto" />
            <p className="text-[14px] md:text-[1.5vw] ">{name}</p>
        </div>
    )
}