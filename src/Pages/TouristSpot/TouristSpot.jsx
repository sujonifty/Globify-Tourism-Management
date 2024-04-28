import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";

const TouristSpot = () => {
    const allSpot = useLoaderData();
    return (
        <div className="bg-[#D2B48C] p-10 mx-auto">
            <h1>All Tourists Spot: {allSpot.length}</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
                {
                    allSpot.map(spot=><Card key={spot._id} spot={spot}></Card>)
                }
            </div>
        </div>
    );
};

export default TouristSpot;