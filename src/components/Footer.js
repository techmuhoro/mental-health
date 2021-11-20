export function Footer() {
    return (
        <div className="bg-gray-100 py-14">
            <div className="pl-12 m-auto md:w-5/6 md:pl-0 lg:w-3/4 lg:flex lg:justify-between">
                <div className="mb-6">
                    <p className="font-bold text-lg">TellCare</p>
                </div>
                <div className="mb-6">
                    <p className="font-bold text-lg mb-3">Service</p>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">About us</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Terms & conditions</a></li>
                        <li><a href="#" className="hover:underline">Privacy policy</a></li>
                    </ul>
                </div>
                <div className="mb-6">
                    <p className="font-bold text-lg mb-3">Check This</p>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Join as Psychologist</a></li>
                        <li><a href="#" className="hover:underline">Mentor</a></li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold text-lg mb-3">Follow us</p>
                    <div className="text-primary text-xl">
                        <span className="mr-4 hover:text-cyan-400">
                            <a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
                        </span>
                        <span className="mr-4 hover:text-red-500">
                            <a href="https://www.youtube.com" target="_blank"><i className="fab fa-youtube"></i></a>
                        </span>
                        <span className="hover:text-blue-600">
                            <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}