export function BigHeading({content, className}) {
    return (
        <h1
            className={`${className} sectionHeading font-semibold my-4 border-b border-[#aeaeae73] text-left text-[#ffffffaa] text-[6vh] sm:text-[8vw] md:text-[6vw] xl:text-[5.5vw] montserrat whitespace-nowrap`}>
                {content}
        </h1>
    )
}