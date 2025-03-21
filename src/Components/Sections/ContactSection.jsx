import { BigHeading, Container, Button, Input, Loader } from "../index"
import emailjs from "emailjs-com";
import { useState } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";

export function ContactSection() {
    const [loading, setLoading] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs
            .sendForm(
                'service_glzjkic',
                'template_ds9deex',
                form.current,
                'mPl4NZd5Q0H-wdlKT'
            )
            .then(
                (result) => {
                    toast.success("Message sent successfully");
                    form.current.reset(); // Clear the form after success
                },
                (error) => {
                    alert("Failed to send email. Please try again.");
                    console.error(error);
                }
            )
            .catch(() => toast.error("Failed to send message. Please try again later."))
            .finally(() => setLoading(false))
    }
    return (
        <Container id="contact" className="text-center">
            <div className="headingBg">
                <BigHeading
                    content="CONTACT"
                    className='text-[#0e0e0e]'
                    color="GreyBg"
                />
            </div>
            <div className=" grid md:grid-cols-2 items-center pt-3 gap-10 md:gap-0">
                <div className=" text-[18px] md:text-[1.4vw]  h-full w-full">
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
                    <form
                        className="flex flex-col gap-4"
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <Input
                            type="text"
                            placeholder="Full Name"
                            name="user_name"
                        />
                        <Input
                            type="text"
                            placeholder="Email"
                            name="user_email"
                        />
                        <textarea
                            placeholder="Type Your Message"
                            name="message"
                            className="w-[70%] text-[14px] md:text-[1.5vw] mx-auto p-2 bg-transparent border-b border-b-[#aeaeae68] placeholder-[#aeaeae68] hover:border-b-[#ffffffaa] hover:placeholder-[#ffffffaa]  outline-none"
                        />
                        <Button
                            type="submit"
                            icon={<i className="ri-send-plane-fill"></i>}
                            value={loading?"Sending...":"Send"}
                            bgcolor={loading?"bg-[#ffffffaa]": "bg-[#c7ce00]"}
                            className="w-[70%] mx-auto mt-4"
                            text=" text-[#0e0e0e] text-[16px] md:text-[1.3vw]"
                        />
                    </form>
                </div>
            </div>
        </Container>
    )
}