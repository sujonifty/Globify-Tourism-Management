import { useLoaderData } from "react-router-dom";
import TypeWriting3 from "../HomeCard/TypeWrite/TypeWriting3";
const CardDetails = () => {
    const selectedSpot = useLoaderData();
    console.log(selectedSpot)
    const { name, country, location, photo, cost, season, travelTime, totalVisitors, description } = selectedSpot;
    console.log(photo)
    return (
        <div>

            <section className="border-2 border-gray-400 pb-20 rounded-b-lg">
                <div className="bg-violet-600">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                        <h1 className="text-5xl min-h-10 font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50"><TypeWriting3></TypeWriting3></h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-justify xl:max-w-3xl dark:text-gray-50">Embrace the adventure and explore the world around you! From hidden gems to iconic landmarks, there's an abundance of beauty waiting to be discovered. Step outside your comfort zone, immerse yourself in new cultures, and create memories that will last a lifetime. Your next great adventure awaits – travel boldly and make every moment count!</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="btn btn-outline btn-secondary px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">Get started</button>
                            <button type="button" className="btn btn-outline btn-secondary px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50">Learn more</button>
                        </div>
                    </div>
                </div>

                <div className="card w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40">
                    <figure><img src={photo} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center"><span className="text-2xl font-medium "></span>{name}</h2>
                        <p className="w-full p-1 md:p-3 text-justify md:w-11/12 mx-auto">{description}</p>

                        <div className="flex flex-col w-full lg:flex-row space-y-5 md:space-y-0">
                            

                            <div className="grid flex-grow h-32 card bg-base-300 md:rounded-l-none md:rounded-r-none rounded-box place-items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <p><span className="text-lg  font-medium ">Country Name: </span>{cost}</p>
                                    <p><span className="text-lg font-medium ">Visitors per years: </span>{totalVisitors}</p>
                                </div>
                            </div>
                            <div className="grid flex-grow h-32 card bg-base-300 md:rounded-l-none md:rounded-r-none rounded-box place-items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <p><span className="text-lg font-medium ">Average Cost: </span>{cost}</p>
                                    <p><span className="text-lg font-medium ">Seasonality: </span>{season}</p>
                                </div>
                            </div>
                            <div className="grid flex-grow h-32 card bg-base-300 md:rounded-l-none rounded-box place-items-center">
                                <div className="flex flex-col justify-center items-center">
                                <p><span className="text-lg font-medium ">Location: </span>{location}</p>
                                    <p><span className="text-lg font-medium ">Travel Time: </span>{travelTime} Days</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions justify-center ">
                            <button className="btn  btn-outline btn-secondary">Booking Now</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CardDetails;