export function Query() {
    return (
        <div className="bg-green-200 py-16">
            <div>
                <p className="text-center text-3xl md:text-4xl font-bold mb-4">Hi! How can we <span className="text-primary">help you?</span></p>
                <p className="text-center mb-10 text-sm md:text-base">
                    <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti totam distinctio</span>
                    <span className="block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi.</span>
                </p>
                <div className="w-full md:w-3/4 lg:w-1/2 m-auto">
                    <input type="text" className="px-4 py-2 w-3/4 rounded-3xl relative -right-10" placeholder="enter your email"/>
                    <button className="bg-primary text-white rounded-3xl w-1/4 py-2 relative -left-10">Subscribe</button>
                </div>
            </div>
        </div>
    )
}