
const Promotion = () => {
    return (
        <div  className="my-20 border-2  pt-10 rounded-md border-gray-400">
            <h1 className="text-3xl md:text-5xl font-bold">PROMOTIONS</h1>
            <p className="w-full p-1 md:p-3 text-justify md:w-11/12 mx-auto"> Tourism promotion is the art of showcasing the beauty, culture, and allure of destinations to travelers around the globe. Through creative marketing campaigns, engaging content, and strategic partnerships, tourism promotion aims to inspire wanderlust, drive visitor traffic, and unlock unforgettable travel experiences. Join us as we explore the dynamic and ever-evolving landscape of tourism promotion, where every destination has a story to tell and every journey is an opportunity for discovery. Embark on a voyage of exploration and let your wanderlust guide you to new horizons. Your next adventure begins here!</p>
            <p className="md:text-2xl font-extrabold opacity-70">CHOOSE THE BEST</p>
            <div>
                <div className="overflow-x-auto my-5 ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Tourist Spot</th>
                                <th>Average Cost</th>
                                <th>Booking</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                
                                <td>
                                    <div className="flex items-center flex-col md:flex-row md:gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://i.ibb.co/TYSwy82/Kuala-Lumpur.jpg" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold hidden md:flex">Kuala-Lumpur city</div>
                                            <div className="text-sm opacity-50">malaysia</div>
                                        </div>
                                    </div>
                                </td>
                                
                                <td>$150</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Book Now</button>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>
                                    <div className="flex items-center flex-col md:flex-row md:gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://i.ibb.co/7byb9vV/bali.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold hidden md:flex">Beautiful of Bali</div>
                                            <div className="text-sm opacity-50">Indonesia</div>
                                        </div>
                                    </div>
                                </td>
                                <td>$140</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Book Now</button>
                                </th>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>
                                    <div className="flex items-center flex-col md:flex-row md:gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://i.ibb.co/MM05s3n/Halong-bay.jpg" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold hidden md:flex">Halong Bay</div>
                                            <div className="text-sm opacity-50">Vietnam</div>
                                        </div>
                                    </div>
                                </td>
                                
                                <td>$180</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Book Now</button>
                                </th>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                
                                <td>
                                    <div className="flex items-center flex-col md:flex-row md:gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://i.ibb.co/xmSHQ19/phiphi-island.jpg" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold hidden md:flex">Phi Phi Islands</div>
                                            <div className="text-sm opacity-50">Thailand</div>
                                        </div>
                                    </div>
                                </td>
                                <td>$200</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Book Now</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Promotion;