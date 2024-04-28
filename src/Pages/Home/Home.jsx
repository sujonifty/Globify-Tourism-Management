import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import HomeCard from "../../components/HomeCard/HomeCard";
import Promotion from "../../components/Promotion/Promotion";
import OurPartner from "../../components/OurPartner/OurPartner";


const Home = () => {
    const allSpot = useLoaderData();
    const selectedSpots = allSpot.slice(0,6);
    // console.log(selectedSpots)
    return (
        <div>
            <h1>Home</h1>
            <Slider></Slider>

            <section>
                <h1>Home card</h1>
                <div className=" grid grid-cols-1 md:grid-cols-3  gap-5 mx-auto">
                {
                    selectedSpots.map(selectedSpot=><HomeCard key={selectedSpot._id} selectedSpot={selectedSpot}></HomeCard>)
                }
                </div>
                
            </section>

            <Promotion></Promotion>
            <OurPartner></OurPartner>
        </div>
    );
};

export default Home;