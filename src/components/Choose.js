import chooseAvatar from "../imgs/choose-avatar.svg"

export function Choose() {
    return (
        <div className="px-4 m-auto mb-16 md:w-5/6 md:px-0 lg:w-3/4">
            <p className="text-4xl font-bold mb-2">
                <span>Why</span>
                <span className="text-primary"> Choose us?</span>
            </p>
            <p className="mb-6">
                <span className="lg:block">Allows you to get secure and private online counselling via your</span>
                <span>own smartphone or tablet</span>
            </p>
            <div className="lg:flex lg:items-center">    
                <div className="lg:w-4/6 lg:mr-8">
                    <div className="max-w-lg flex items-center py-2 px-1 mb-4 shadow-xl">
                        <p className="px-3 h-14 bg-green-200 rounded-xl flex items-center justify-center mr-3">
                            <span className="text-primary text-3xl">
                                <i className="fas fa-shield-alt"></i>
                            </span>
                        </p>
                        <div>
                            <p className="font-semibold sm:text-base">Confidential</p>
                            <p className="text-sm">Allows you to get secure and private online counselling via your own smartphone or tablet</p>
                        </div>
                    </div>
                    <div className="max-w-lg flex items-center py-2 px-1 mb-4">
                        <p className="px-3 h-14 bg-green-200 rounded-xl flex items-center justify-center mr-3">
                            <span className="text-primary text-3xl">
                                <i className="fas fa-heart"></i>
                            </span>
                        </p>
                        <div>
                            <p className="font-semibold sm:text-base">Comfortable to use</p>
                            <p className="text-sm">No need to make an appoint or go to the counselor's office in advance</p>
                        </div>
                    </div>
                    <div className="max-w-lg flex items-center py-2 px-1 mb-4">
                        <p className="px-3 h-14 bg-green-200 rounded-xl flex items-center justify-center mr-3">
                            <span className="text-primary text-3xl">
                                <i className="fas fa-heart"></i>
                            </span>
                        </p>
                        <div>
                            <p className="font-semibold sm:text-base">Flexible</p>
                            <p className="text-sm">Flexible consoltation time makes it easy for you to spend time</p>
                        </div>
                    </div>
                </div>
                <div className="h-80 flex justify-start">
                    <img className="h-full w-full" src={chooseAvatar} alt="why choose us video" />
                </div>
            </div>
        </div>
    );
}