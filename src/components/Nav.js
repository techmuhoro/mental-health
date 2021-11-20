export function Nav() {
    return (
        <div className="m-auto h-16 flex items-center mb-12 px-4 md:px-0 md:w-5/6 lg:w-3/4">
            <div>
                <p className="text-2xl font-bold">TellCare</p>
            </div>
            <div className="flex ml-auto items-center">
                <div className="hidden md:block mr-8">
                    <ul className="flex w-64 lg:w-72 justify-between font-medium text-base">
                        <li className="pointer">Home</li>
                        <li>Contact</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className= "text-green-600 flex items-center">
                    <button className="inline-block border-2 border-green-600 mr-8 md:mr-0 py-2 px-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                        Sign up
                    </button>
                    <button className="text-green-600 text-3xl md:hidden">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}