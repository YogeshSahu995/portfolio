import { Container, BigHeading, SkillCard } from "../index"

export function SkillSection() {
    const frontendSkills = [
        {
            icon: "./images/html-5.png",
            name: "HTML"
        },
        {
            icon: "./images/css-3.png",
            name: "CSS"
        },
        {
            icon: "./images/bootstrap.png",
            name: "Bootstrap"
        },
        {
            icon: "./images/tailwind-css.png",
            name: "Tailwind"
        },
        {
            icon: "./images/javascript.png",
            name: "JavaScript"
        },
        {
            icon: "./images/reactjs.png",
            name: "ReactJs"
        },
    ]
    const backendSkills = [
        {
            icon: './images/nodejs.png',
            name: 'NodeJs'
        },
        {
            icon: './images/expressjs.png',
            name: 'ExpressJs'
        },
        {
            icon: './images/mongodb.png',
            name: 'MongoDB'
        },
    ]
    const tools = [
        {
            icon: './images/postman.png',
            name: "Postman"
        },
        {
            icon: './images/photoshop.png',
            name: "PhotoShop"
        },
        {
            icon: './images/git.png',
            name: "Git"
        }
    ]
    return (
        <Container id="skills" className="text-center">
            <div className="headingBg">
                <BigHeading
                    content="SKILLS"
                    className='text-[#0e0e0e]'
                />
            </div>
            <div className="flex justify-center flex-col pt-7 gap-7">
                <div className="w-full items-center flex-1">
                    <h2 className="text-[6vw] md:text-[4vw] xl:text-[3.6vw] 2xl:text-[3vw] skillHeading">Frontend</h2>
                    <ul className="w-full gap-4 mx-auto flex flex-wrap justify-center skillboxes">
                        {
                            frontendSkills?.map((skill) => (
                                <li key={skill.name}>
                                    <SkillCard icon={skill.icon} name={skill.name} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-full items-center">
                    <h2 className="text-[6vw] md:text-[4vw] xl:text-[3.6vw] 2xl:text-[3vw] skillHeading">Backend</h2>
                    <ul className="w-full gap-4 mx-auto flex flex-wrap justify-center skillboxes">
                        {
                            backendSkills?.map((skill) => (
                                <li key={skill.name}>
                                    <SkillCard icon={skill.icon} name={skill.name} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-full items-center">
                    <h2 className="text-[6vw] md:text-[4vw] xl:text-[3.6vw] 2xl:text-[3vw] skillHeading">Other tools</h2>
                    <ul className="w-full gap-4 mx-auto flex flex-wrap justify-center">
                        {
                            tools?.map((skill) => (
                                <li key={skill.name}>
                                    <SkillCard icon={skill.icon} name={skill.name} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Container>
    )
}