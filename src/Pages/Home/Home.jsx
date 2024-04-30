import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import HomeCard from "../../components/HomeCard/HomeCard";
import Promotion from "../../components/Promotion/Promotion";
import OurPartner from "../../components/OurPartner/OurPartner";
import CountryBody from "../../components/CountryBody/CountryBody";
import TypeWriting2 from "../../components/HomeCard/TypeWrite/TypeWriting2";
import TypeWriting3 from "../../components/HomeCard/TypeWrite/TypeWriting3";
// import LottieAnimation from "../../components/LottieAnimation/LottieAnimation";


const Home = () => {
    const allSpot = useLoaderData();
    const selectedSpots = allSpot.slice(0, 6);
    // console.log(selectedSpots)
    return (
        <div>
            <div className="my-5">
            <Slider></Slider>
            </div>
            <div className="min-h-10 mt-20">
                <TypeWriting2></TypeWriting2>
            </div>
            <h1 className="text-2xl  md:text-5xl font-bold">Explore Spectacular Tourism Spots</h1>
            <div className="w-full p-3 md:w-11/12 mx-auto mb-16">

                <p className="w-full p-1 md:p-3 text-justify md:w-11/12 mx-auto">
                    Discover the world with us as we guide you through unforgettable experiences, breathtaking destinations, and seamless travel arrangements. Whether you're seeking an adventurous escape, a cultural immersion, or simply a relaxing getaway, we're here to make your travel dreams a reality. With our expertise and personalized service, embark on a journey of exploration and create memories that last a lifetime. GlobifyTourism Management – Where every trip is an extraordinary adventure!
                </p>
            </div>
            <CountryBody></CountryBody>
            <section>
                <div className="w-full p-3 md:w-11/12 mx-auto my-16">
                    <div className="min-h-10 my-5">
                        <TypeWriting3></TypeWriting3>
                    </div>
                    <p className="w-full p-1 md:p-3 text-justify md:w-11/12 mx-auto">
                        Promises a journey filled with moments that will linger in your memory long after the trip ends. From breathtaking natural wonders to culturally rich heritage sites, each destination holds the promise of unique and unforgettable encounters. Whether you seek adrenaline-pumping adventures, tranquil escapes, or immersive cultural experiences, the world is brimming with opportunities to create lasting memories. Prepare to be enchanted by stunning landscapes, tantalized by exotic cuisines, and inspired by the diverse cultures that await your exploration. With every step of your journey, embrace the unexpected and allow yourself to be captivated by the beauty and wonder of the world. Your next unforgettable travel experience is just around the corner.
                    </p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-auto">
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