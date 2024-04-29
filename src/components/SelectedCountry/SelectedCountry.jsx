import { useLoaderData } from "react-router-dom";



const SelectedCountry = () => {
    const selectedCountryData = useLoaderData();
    console.log(selectedCountryData)
    return (
        <div>
            
        </div>
    );
};

export default SelectedCountry;