import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import HomeCard from "../../components/HomeCard/HomeCard";
import Promotion from "../../components/Promotion/Promotion";
import OurPartner from "../../components/OurPartner/OurPartner";
import CountryBody from "../../components/CountryBody/CountryBody";
// import LottieAnimation from "../../components/LottieAnimation/LottieAnimation";


const Home = () => {
    const allSpot = useLoaderData();
    const selectedSpots = allSpot.slice(0, 6);
    // console.log(selectedSpots)
    return (
        <div>


            <Slider></Slider>
            <div>
                {/* <LottieAnimation></LottieAnimation> */}
            </div>
            <CountryBody></CountryBody>
            <section>
                
                <div className=" grid grid-cols-1 md:grid-cols-3  gap-5 mx-auto">
                    {
                        selectedSpots.map(selectedSpot => <HomeCard key={selectedSpot._id} selectedSpot={selectedSpot}></HomeCard>)
                    }
                </div>

            </section>

            <Promotion></Promotion>
            <OurPartner></OurPartner>
        </div>
    );
};

export default Home;