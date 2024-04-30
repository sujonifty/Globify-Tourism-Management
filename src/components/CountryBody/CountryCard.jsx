import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";


const CountryCard = ({ item }) => {
    const { image, country_name, description } = item;
    return (
        <div>
            {/* {`bg-[url(${image})] bg-cover object-cover`} */}
            <NavLink to={`/asia/${country_name}`} style={{ backgroundImage: `url(${image})` }} >

                
                <div className="card shadow-2xl border-2 border-gray-400">
                    <div className="relative">
                        <img className="w-full bg-cover object-cover md:h-56  rounded-xl " src={image} alt={country_name} />
                        <div className="absolute h-full w-full top-0 bottom-0 rounded-xl bg-black opacity-70">
                            <Fade cascade className="flex flex-col justify-center space-y-3 pt-6 items-center text-white font-semibold">
                                <h2 className=" text-2xl md:text-5xl font-semibold leading-tight tracking-wide">{country_name}</h2>
                                <p className=" w-11/12 flex-1 text-center dark:text-gray-600">{description}</p>
                            </Fade>
                        </div>
                    </div>
                </div>

            </NavLink>
        </div>
    );
};

export default CountryCard;