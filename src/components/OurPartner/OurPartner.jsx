

const OurPartner = () => {
    return (
        <div>
            <section className="pt-6 card border-2 border-gray-400  ">
                <h1 className="text-3xl md:text-5xl font-bold  mb-10">Our Partners</h1>
                <div className="container  lg:mt-10 lg:py-16 flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 sm:grid-cols-2">
                        <img className="object-cover w-full  rounded-lg bg-gray-500 aspect-square" src="https://i.ibb.co/8P5ZvZk/p1.png" />
                        <img className="object-cover w-full  rounded-lg bg-gray-500 aspect-square" src="https://i.ibb.co/JjVWQPs/p2.png" />
                        <img className="object-cover w-full  rounded-lg bg-gray-500 aspect-square" src="https://i.ibb.co/6wmSqZP/p3.png" />
                        <img className="object-cover w-full  rounded-lg bg-gray-500 aspect-square" src="https://i.ibb.co/4NLJ8zH/p4.png" />
                        <img className="object-cover w-full  rounded-lg bg-gray-500 aspect-square" src="https://i.ibb.co/wSb9R0Z/p5.png" />
                        <img className="object-cover w-full  rounded-lg bg-gray-500 aspect-square" src="https://i.ibb.co/7KCNPCb/p6.png" />
                    </div>
                </div>
                <div className=" py-20 rounded-b-xl shadow-xl border-t-2 border-gray-400">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-500 mb-10">Subscribe for Special Offers</h1>
                    <div className=" flex justify-evenly items-center">
                        <div className="flex justify-center items-center">
                            <div className="w-full md:w-3/12" >
                                <img className="w-full md:w-11/12" src="https://i.ibb.co/54Jsnwm/email.png" alt="email" />
                            </div>
                            <div >
                                <p>Get the latest news and offers</p>
                                <p>Subscribe to our newsletter</p>
                            </div>
                        </div>
                        <div>
                            <fieldset className="w-full space-y-1 dark:text-gray-800">
                                <label htmlFor="price" className="block text-xl font-semibold bg-opacity-70">Get Exclusive Updates</label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input type="text" className="grow w-40 md:w-auto" placeholder="Email" />
                                    <span><button className="hover:bg-[#D2B48C] hidden md:flex btn -mr-3 hover:text-white font-bold">Subscribe Now</button></span>
                                </label>
                                <button className="hover:bg-[#D2B48C] md:hidden btn -mr-4 hover:text-white font-bold">Subscribe Now</button>

                            </fieldset>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurPartner;