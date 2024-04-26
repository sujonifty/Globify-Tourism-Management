import { useLoaderData } from "react-router-dom";
const CardDetails = () => {
    const selectedSpot = useLoaderData();
    const { name, country, location, photo, cost, season, travelTime, totalVisitors, description } = selectedSpot;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">name</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Booking Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDetails;