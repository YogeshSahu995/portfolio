import { BigHeading, Container, Button, Input } from "../index"

export function ContactSection() {
    return (
        <Container id="contact" className="text-center">
            <div className="headingBg">
                <BigHeading
                    content="CONTACT"
                    className='text-[#0e0e0e]'
                    color="GreyBg"
                />
            </div>
            <div className="grid md:grid-cols-2 items-center pt-3 gap-10 md:gap-0">
                <div className=" text-[14px] md:text-[1.5vw]  h-full w-full">
                    <div className="w-fit h-full mx-auto flex flex-col justify-center gap-4">
                        <div className="flex gap-2">
                        <i className="ri-map-pin-2-fill text-[#c7ce00]"></i>
                            <p>F-21 A krishan vihar, New Delhi - 110086</p>
                        </div>
                        <div className="flex gap-2">
                        <i className="ri-phone-fill text-[#c7ce00]"></i>
                            <p>9310667650</p>
                        </div>
                        <div className="flex gap-2">
                        <i className="ri-mail-fill text-[#c7ce00]"></i>
                            <p>1413002yogesh10206@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form className="flex flex-col gap-4">
                        <Input
                            type="text"
                            placeholder="Full Name"
                            className=""
                        />
                        <Input
                            type="text"
                            placeholder="Email"
                        />
                        <Input
                            type="text"
                            placeholder="Phone Number"
                        />
                        <textarea
                            placeholder="Type Your Message"
                            className="w-[70%] mx-auto p-2 bg-transparent border-b border-b-[#aeaeae68] placeholder-[#aeaeae68] hover:border-b-[#ffffff88] hover:placeholder-[#ffffff88]  outline-none"
                        />
                        <Button
                            type="submit"
                            icon={<i className="ri-send-plane-fill"></i>}
                            value="Send"
                            className="w-[70%] mx-auto mt-4"
                            text=" text-[#0e0e0e]"
                        />
                    </form>
                </div>
            </div>
        </Container>
    )
}