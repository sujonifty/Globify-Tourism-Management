import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useState } from "react";
import Swal from "sweetalert2";

const TouristSpot = () => {
    const spot = useLoaderData();
    const [allSpot,setAllSpot]=useState(spot)
const handleSort =()=>{
    //sent data to the server site
    fetch('https://globify-tourism-server.vercel.app/touristSort')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setAllSpot(data);
        if(data){
            Swal.fire({
                title: 'Success!',
                text: 'Ascending sorted successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
}

    return (
        <div className=" p-10 mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold">Total Tourists Spot: {allSpot.length}</h1>
            <div className="dropdown dropdown-hover my-10 ">
                <div tabIndex={0} role="button" className="btn  m-1 text-xl font-medium">Sort Tourist-spot</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a><button onClick={handleSort}>sort By Cost</button></a></li>
                </ul>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                {
                    allSpot.map(spot => <Card key={spot._id} spot={spot}></Card>)
                }
            </div>
        </div>
    );
};

export default TouristSpot;