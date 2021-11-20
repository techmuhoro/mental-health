import testimonialOne from "../imgs/testimonial-one.jpg";
import testimonialTwo from "../imgs/testimonial-two.jpg";

export function Testimonial() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="px-4 m-auto md:w-5/6 md:px-0 lg:w-3/4">
                <div className="flex flex-col items-start md:flex-row md:items-center mb-12">
                    <p className="text-4xl font-bold mb-2">
                        <span className="block">What do <span className="text-primary">people</span> </span>
                        <span className="block"><span className="text-primary">think</span> of us</span>
                    </p>
                    <button className="border-primary border text-primary px-12 py-2 rounded-xl block ml-auto hover:bg-primary hover:text-white transition-all duration-300">See all</button>
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:justify-around">
                    <div className="bg-white w-96 pb-6 pt-10 px-6 rounded-xl relative mb-10 lg:mb-0">
                        <p className="font-semibold mb-2">
                            <span className="block">So now i know the triggers</span>
                            <span className="block">of the problems i've been facing</span>
                        </p>
                        <p className="mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum eveniet ipsam quos similique, unde facilis sit iusto enim sed eius, dolore, magni aperiam.
                        </p>
                        <p className="border-b border-gray-300 mb-2"></p>
                        <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full mr-3">
                                <img className="w-full h-full rounded-full" src={testimonialOne} alt="" />
                            </div>
                            <p>
                                <span className="block font-semibold">Taylor Anthony</span>
                                <span className="bold text-gray-400">Freelance</span>
                            </p>
                        </div>
                        <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center absolute -top-4">
                            <span className="text-white">
                                <i className="fas fa-quote-left"></i>
                            </span>
                        </div>
                    </div>
                    <div className="bg-white w-96 pb-6 pt-10 px-6 rounded-xl relative">
                        <p className="font-semibold mb-2">
                            <span className="block">So now i know the triggers</span>
                            <span className="block">of the problems i've been facing</span>
                        </p>
                        <p className="mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum eveniet ipsam quos similique, unde facilis sit iusto enim sed eius, dolore, magni aperiam.
                        </p>
                        <p className="border-b border-gray-300 mb-2"></p>
                        <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full mr-3">
                                <img className="w-full h-full rounded-full" src={testimonialTwo} alt="" />
                            </div>
                            <p>
                                <span className="block font-semibold">Taylor Anthony</span>
                                <span className="bold text-gray-400">Freelance</span>
                            </p>
                        </div>
                        <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center absolute -top-4">
                            <span className="text-white">
                                <i className="fas fa-quote-left"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}