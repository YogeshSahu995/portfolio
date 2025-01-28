import { BigHeading, Container } from "../index"

export function ProjectSection() {
    return (
        <Container id="projects" className="text-center">
            <div className="headingBg">
                <BigHeading
                    content="PROJECT"
                    className='text-[#0e0e0e]'
                    color="GreyBg"
                />
            </div>
            <div className="h-[100vh] grid md:grid-cols-2 items-center pt-3">
                <div></div>
            </div>
        </Container>
    )
}