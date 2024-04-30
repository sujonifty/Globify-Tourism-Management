import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


const CountryBody = () => {
    const [countryData, setCountryData]=useState([]);
    useEffect(() => {
        fetch('https://globify-tourism-server.vercel.app/asia')
            .then(res => res.json())
            .then(data => {
                setCountryData(data)
            })
    }, [])
    // console.log(countryData)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 card justify-center items-center my-20 mx-auto">
                {
                    countryData.map((item,index)=><CountryCard key={index} item={item}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default CountryBody;


