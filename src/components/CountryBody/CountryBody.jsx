import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


const CountryBody = () => {
    const [countryData, setCountryData]=useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/asia')
            .then(res => res.json())
            .then(data => {
                setCountryData(data)
            })
    }, [])
    // console.log(countryData)
    return (
        <div>
            <div className="grid grid-cols-1  gap-5 mx-auto">
                {
                    countryData.map((item,index)=><CountryCard key={index} item={item}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default CountryBody;


