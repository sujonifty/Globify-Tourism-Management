import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Card = ({ spot }) => {
    const { _id, name, location,cost, photo, description } = spot;
    return (
        <div>

            <div className="relative border-2 border-gray-400 text-start flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-50 dark:text-gray-800">

                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <h2 className="text-2xl font-semibold leading-tight tracking-wide">{name}</h2>
                <p className="flex-1 w-full p-1 md:p-3 text-justify md:w-11/12 mx-auto dark:text-gray-600">{description.slice(0, 150)}</p>
                <p className="text-2xl font-semibold leading-tight tracking-wide">Average Cost: {cost}</p>


                <div className="flex justify-between items-center space-x-1">
                    <h2 className="text-2xl"><FaLocationDot /></h2>
                    <p className="text-2xl font-semibold leading-tight tracking-wide">Location: {location}</p>
                </div>
                <NavLink to={`/cardDetails/${_id}`}><button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button></NavLink>

            </div>
        </div>
    );
};
Card.propTypes = {
    spot: PropTypes.object
}
export default Card;