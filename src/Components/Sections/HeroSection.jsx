import { useEffect, useState } from "react"
import { Button, Container } from "../index"

export function HeroSection() {
    const [profession, setProfession] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setProfession(prev => !prev)
        }, 2000)

        return() => clearInterval(interval)
    }, [])

    return (
        <Container
            id="home"
            className="h-fit md:h-[80vh] gap-7 md:gap-0 grid md:grid-cols-2">
            <div
                className="order-2 md:order-1 h-full w-full flex items-center text-center gap-4 md:mt-[15vh] flex-col">
                <div
                    className="relative">
                    <h1
                        className="text-[#c7ce00] text-[5vh] sm:text-[8vw] md:text-[6vw] xl:text-[5.5vw] font-semibold montserrat whitespace-nowrap "> Yogesh Kumar</h1>
                    <img
                        src="./images/lenShine.png"
                        alt="lensshine"
                        loading="lazy"
                        className="absolute bottom-0 right-0 h-[10vw] w-fit object-cover object-center"
                    />
                </div>
                <div>
                    <p className=" leading-[4vw] text-[5vw] sm:text-[5.5vw] md:text-[3vw]">I am
                        <span className="text-[#c7ce00] transition-all ease-linear duration-200">
                            {profession? " Mern Stack Developer": " Web Developer"}
                        </span>
                    </p>
                </div>
                <Button
                    value=" Download CV"
                    className="montserrat"
                    icon={<i className="ri-download-line font-semibold"></i>}
                />
            </div>
            <div
                className="order-1 md:order-2 bg-[#0e0e0e] col before:hidden md:before:block  md:bg-gradient-to-b from-[#c7ce00] to-[#0e0e0e] imagedesign">
                <div
                    className="h-[60vw] w-[60vw] bg-gradient-to-b from-[#c7ce00] to-[#0e0e0e] rounded-full md:h-full md:w-fit mx-auto">
                    <img
                        src="./images/forPortfolio.png"
                        alt= "main image"
                        loading="lazy"
                        className="h-full w-fit object-cover object-center mx-auto"
                    />
                </div>
            </div>
        </Container>
    )
}