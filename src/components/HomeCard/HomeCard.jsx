import { NavLink } from "react-router-dom";


const HomeCard = ({selectedSpot}) => {
    const {_id, name, country, location,photo,cost, season,travelTime,totalVisitors, description} = selectedSpot;

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-800">{description.slice(0,100)}</p>
                    </div>
                    <NavLink to={`/cardDetails/${_id}`}><button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;