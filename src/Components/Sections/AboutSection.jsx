import { Container, BigHeading } from "../index";

export function AboutSection() {
    return (
        <Container id="about" className="text-center">
            <div className="headingBg">
                <BigHeading
                    content="ABOUT"
                    className='text-[#0e0e0e]'
                    color="GreyBg"
                />
            </div>
            <div className="h-fit grid md:grid-cols-2 gap-4 md:gap-0 items-center pt-3">
                <div>
                    <img 
                        src="./images/illustratorOfCoding.png" 
                        className="h-[30vh] md:h-[35vh] lg:h-[45vh] xl:h-[50vh] w-fit mx-auto object-cover object-center SideImage"
                    />
                </div>
                <div className="text-[18px] md:text-[1.4vw]  md:text-left SidePara">
                    Hello, I am Yogesh, a fresher <span className="text-[#c7ce00]">MERN stack developer</span> from new Delhi, India, passionate about creating dynamic and user-friendly web applications. I have a strong foundation in technologies like React, Node.js, MongoDB, and Express.js. Alongside development, I am skilled in using tools like Photoshop for design and Postman for API testing. During my learning journey, I have worked on projects like a <span className="text-[#c7ce00]">YouTube clone</span>, where I implemented features such as <span className="text-[#c7ce00]">pagination</span> and <span className="text-[#c7ce00]">debouncing</span>. Having completed my 12th grade at Sarvodaya Vidyalaya Sector-3, I am eager to further enhance my skills and contribute to innovative projects in web development.
                </div>
            </div>
        </Container>
    )
} 