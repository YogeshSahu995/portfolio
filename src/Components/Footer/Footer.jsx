import { Logo } from "../Header/Logo";

export function Footer(){
    const otherLinks = [
        {
            icon :"ri-instagram-fill",
            slug : "",
        },
        {
            icon : "ri-github-fill",
            slug : "https://github.com/yogeshSahu995",
        },
        {
            icon : "ri-twitter-fill",
            slug : "",
        },
        {
            icon : "ri-linkedin-box-fill",
            slug : "",
        },
        {
            icon : "ri-mail-line",
            slug : "",
        }
    ]
    return(
        <footer className="flex flex-col gap-4 w-full p-10 text-black font-medium text-center">
            <p className="">Yogesh kumar © 2025</p>
            <div className="h-fit w-fit mx-auto">
                <Logo />
            </div>
            <div className="flex justify-center gap-5 text-2xl">
                {otherLinks?.map((link) =>( 
                    <a 
                        href={link.slug} 
                        className="cursor-pointer transition-all duration-200 ease-linear hover:scale-[1.2]" 
                        target="_blank"
                        key={link.icon}
                    >
                        <i className={`${link.icon}`}></i>
                    </a>
                ))}
            </div>
        </footer>
    )
}