import { BigHeading, Container, Carousel, Button } from "../index"

export function ProjectSection() {
    const slides = [
        {
            imageurl: './projectImages/YouFeed.png',
            name: 'You Page'
        },
        {
            imageurl: './projectImages/yourChannel.png',
            name: 'Your Channel'
        },
        {
            imageurl: './projectImages/channelVideos.png',
            name: 'Channel Videos'
        },
        {
            imageurl: './projectImages/channelPosts.png',
            name: 'Channel Posts'
        },
        {
            imageurl: './projectImages/openPlaylist.png',
            name: 'Opened Playlist'
        },
        {
            imageurl: './projectImages/playVideo.png',
            name: 'Play video'
        },
        {
            imageurl: './projectImages/videoComment.png',
            name: 'Video comments'
        },
        {
            imageurl: './projectImages/subscribedChannelInfo.png',
            name: 'Subscribed Channel'
        },
        {
            imageurl: './projectImages/customizeForm.png',
            name: 'Customize Form'
        },
        {
            imageurl: './projectImages/postForm.png',
            name: 'Post Form'
        }
    ]
    return (
        <Container id="projects" className="text-center">
            <div className="headingBg">
                <BigHeading
                    content="PROJECT"
                    className='text-[#0e0e0e]'
                    color="GreyBg"
                />
            </div>
            <div className="h-fit w-full pt-3">
                <div className="flex flex-col gap-4">
                    <p className="text-2xl sm:3xl md:text-4xl p-1 border-b w-fit mx-auto mb-4">Youtube Clone</p>
                    <div className="max-w-[90vw] md:max-w-[50vw] mx-auto">
                        <Carousel>
                            {
                                slides.map((e) => (
                                    <img src={e.imageurl} key={e.name}/>
                                ))
                            }
                        </Carousel>
                        <div className="flex justify-between w-full md:w-[50vw] mx-auto my-4">
                            <Button
                                value="Demo"
                                icon={<i className="ri-arrow-right-up-line"></i>}
                            />
                            <Button
                                value="Source"
                                icon={<i className="ri-arrow-right-up-line"></i>}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-around gap-3 mt-3 border p-2 rounded bg-[#00000049]">
                            <div className="flex gap-4 flex-wrap justify-center items-center">
                                <p className="tech">React</p>
                                <p className="tech">Express</p>
                                <p className="tech">Node</p>
                                <p className="tech">MongoDB</p>
                                <p className="tech">TailwindCss</p>
                            </div>
                            <p>
                                Through my YouTube Clone project, I have gained valuable experience in various key aspects of web development. I learned how to make API calls efficiently, implement authentication using access and refresh tokens, and manage token refreshing with Axios interceptors. Additionally, I explored how to send form data to the backend, design and develop APIs, and implement pagination and debouncing for better performance. I also worked with API query parameters to enable search functionality and integrated third-party services like Cloudinary for media management. Moreover, I deepened my understanding of middleware, utilizing it effectively for authentication, request handling, and other backend operations. Throughout the development process, I extensively used Postman to test and debug APIs, ensuring seamless communication between the frontend and backend.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}