import heroAvatar from "../imgs/hero-avatar.svg"

export function Hero() {
    return (
        <div className="px-4 m-auto lg:flex lg:flex-row-reverse lg:items-center md:px-0 md:w-5/6 lg:w-3/4">
            <div className="h-80 flex justify-center mb-10 lg:w-1/2 lg:h-96">
                <img className="h-full" src={heroAvatar} alt="landing hero" />
            </div>
            <div className="lg:w-1/2 lg:mr-6">
                <div className="mb-8 text-5xl font-bold">
                    <p className="">Mental <span className="text-primary">Health</span></p>
                    <p><span className="text-primary">Care</span> online</p>
                </div>
                <p className="mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in sint distinctio consequatur ab neque exercitationem repudiandae error ratione tenetur.
                </p>
                <div className="flex">
                    <button className="bg-primary border border-primary text-white px-6 py-2 mr-3 rounded-xl hover:bg-green-100 hover:text-primary transition-all duration-300">Book now</button>
                    <button className=" border border-primary px-6 py-2 rounded-xl text-primary flex items-center hover:bg-primary hover:text-white transition-all duration-300">
                        <p className="border-primary border flex items-center justify-center mr-2 w-7 h-7 rounded-full">
                            <i className="fas fa-play"></i>
                        </p>
                        <span>How it works</span>
                    </button>
                </div>
            </div>
        </div>
    );
}