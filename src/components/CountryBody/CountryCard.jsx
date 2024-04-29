import { NavLink } from "react-router-dom";


const CountryCard = ({ item }) => {
    const { image, country_name, description } = item;
    return (
        <div>s
            {/* {`bg-[url(${image})] bg-cover object-cover`} */}
            <NavLink  to={`/asia/${country_name}`} style={{ backgroundImage: `url(${image})` }} >

                <div className='space-y-3 py-5 bg-black text-white opacity-60  shadow-2xl lg:py-20 lg:m-20 card '>
                    <div className="title font-bold text-2xl lg:text-3xl" data-swiper-parallax="-300">
                       {country_name}
                    </div>
                    <div className="pb-2 hidden md:flex text-center font-semibold text-xl  justify-center">
                        <p>A Serene Escape Amidst Limestone Wonders</p>
                    </div>
                    <div className=" w-2/3 mx-auto hidden md:flex" data-swiper-parallax="-100">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>

            </NavLink>
        </div>
    );
};

export default CountryCard;