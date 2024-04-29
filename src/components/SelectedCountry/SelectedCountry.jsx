import { NavLink, useLoaderData } from "react-router-dom";



const SelectedCountry = () => {
    const selectedCountryData = useLoaderData();
    console.log(selectedCountryData)
    return (
        <div>
            <div className=" p-10 mx-auto">
                <h1>All Tourists spot: {selectedCountryData.length}</h1>

                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
                    {
                        selectedCountryData.map(selectedData =>
                            <div key={selectedData._id} className="max-w-xs rounded-md shadow-md bg-blue-200 dark:text-gray-800">
                                <img src={selectedData.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{selectedData.name}</h2>
                                        <p>Average cost: {selectedData.cost}</p>
                                        <p className="dark:text-gray-800">{selectedData.description.slice(0, 100)}</p>
                                    </div>
                                    <NavLink to={`/cardDetails/${selectedData._id}`}><button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button></NavLink>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SelectedCountry;