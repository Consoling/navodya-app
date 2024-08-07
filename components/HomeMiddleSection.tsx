
const HomeMiddleSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-10">
            <div className='flex flex-col justify-center items-center md:px-12 px-6 gap-10'>
                <div className='flex max-md:flex-col bg-white p-4 md:justify-between justify-center items-center gap-3 border-[1px] border-black border-opacity-30 shadow-lg'>
                    <p className='flex-1 md:text-xl text-md font-medium text-justify'>Join thousands of Jawahar Navodaya Vidyalaya Nalgonda alumni from across the nation.
                        Connect with old friends, network with professionals, and stay updated with the latest alumni events and
                        initiatives.
                    </p>
                    <div className='flex-1'>
                        <img src="/jnvimg1.png" alt="jmv image" className='w-full h-full object-cover' />
                    </div>
                </div>

                <div className="flex flex-col bg-white items-center gap-5 border-[1px] border-[#878282] rounded-[5px] p-5 ">
                    <div className="flex w-full justify-between items-center gap-2">
                        <h1 className="md:text-2xl text-xl font-bold">About Jawahar Navodaya Vidyalaya</h1>
                        <a href="/about"><button className="flex items-center px-4 py-2 bg-[#6069E7] rounded-xl text-white gap-1 ">View more<span className="md:text-2xl text-xl font-bold">&rarr;</span></button></a>
                    </div>
                    <p className="md:text-lg text-base text-justify font-medium ">Our mission is to cultivate a robust network of JNVCC alumni,
                        provide mentorship and guidance to current students, and foster a spirit of giving back to the community.
                        We aim to create a platform for alumni to share their experiences, support each other's endeavors, and contribute to the growth of Navodaya Vidyalayas.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
                        <div className="transition duration-200 ease-in-out hover:scale-105">
                            <img src="/home-about-img1.svg" alt="Card Image" className="w-full object-cover" />
                                <div className="relative self-center bottom-[42px] ">
                            </div>
                        </div>
                        <div className="transition duration-200 ease-in-out hover:scale-105">
                            <img src="/home-about-img2.svg" alt="Card Image" className="w-full object-cover" />
                        </div>
                        <div className="transition duration-200 ease-in-out hover:scale-105">
                            <img src="/home-about-img3.svg" alt="Card Image" className="w-full object-cover" />
                        </div>
                        
                    </div>
                </div>

                <div className='flex flex-col items-center gap-5'>
                    <h1 className='font-bold text-2xl underline underline-offset-2'>Alumni Engagement</h1>
                    <p className='text-center font-medium text-lg'>Alumni engagement strategies should start well before students graduate. This helps to build more effective relationships and long-term networks</p>
                    <div className='grid md:grid-cols-3 grid-cols-2 lg:gap-12 gap-6 max-[480px]:gap-4 px-2 '>
                        {alumniEngagementCards.map((card, index) => {
                            return (
                                <div key={index} className='flex flex-col bg-white items-center p-3 gap-2 border-[#979393] border-[1px] rounded-xl shadow-xl min-w-36 cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_4px_16px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)]'>
                                    <div >
                                        <img style={{ backgroundColor: `${card.imgBg}` }} src={card.img} alt={`card ${index + 1}`} className='w-full h-full object-cover rounded-t-xl' />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-lg font-semibold'>{card.title}</h2>
                                        <p className='text-base font-medium'>{card.description}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            <div className='w-full flex items-center bg-[#DEB91E] p-8 gap-8 max-md:flex-col-reverse'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold text-left'>Message From the President</h1>
                    <p className='font-medium text-lg md:text-left text-justify'>Our mission is to foster a strong, vibrant community where every alumnus feels connected and valued.
                        We strive to create opportunities for networking, professional growth, and personal development.
                        By bringing together alumni from all walks of life,
                        we can support each other in achieving our goals and making a positive impact on society.
                    </p>
                </div>
                <div className='rounded-full border-[#6512B7] border-2'>
                    <div className='relative min-w-[200px] h-[200px] m-2'>
                        <img src="jnvpresident.png" alt="jnvpresident" className='w-full h-full object-cover rounded-full bg-white absolute' />
                    </div>
                </div>
            </div>
        </div>
    )
}

interface AlumniEngagement {
    img: string;
    imgBg: string;
    title: string;
    description: string;
}

const alumniEngagementCards: AlumniEngagement[] = [
    {
        img: "/jnvimg2.png",
        imgBg: "#7D5B04",
        title: "Networking Opportunities",
        description: "Join our alumni network to connect with graduates, attend events, engage in online forums, and participate in special interest groups.",
    },
    {
        img: "/jnvimg3.png",
        imgBg: "#d396f8",
        title: "Events and Reunions",
        description: "We host annual reunions, regional meetups, webinars, and workshops to reconnect and network throughout the year.",
    },
    {
        img: "/jnvimg4.png",
        imgBg: "#231609",
        title: "Alumni Stories",
        description: "Discover inspiring alumni success stories and how JNV shaped their journeys.",
    },
]

export default HomeMiddleSection;