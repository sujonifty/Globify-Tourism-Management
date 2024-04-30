
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../Providers/AuthProvider";


const Updated = () => {
    const { user } = useContext(authContext) || {};
    const loadedSpot = useLoaderData();
    const { _id, name, country, location, photo, cost, season, travelTime, totalVisitors, description } = loadedSpot;
    console.log(loadedSpot)
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const country = e.target.country.value;
        const location = e.target.location.value;
        const photo = e.target.photo.value;
        const cost = e.target.cost.value;
        const season = e.target.season.value;
        const travelTime = e.target.travelTime.value;
        const totalVisitors = e.target.totalVisitors.value;
        const description = e.target.description.value;
        const userName = user?.displayName
        const userEmail = user?.email
        console.log(userEmail)
        // console.log(touristInfo);
        const touristInfo = { name, userName, userEmail, country, location, photo, cost, season, travelTime, totalVisitors, description }


        //sent data to the server site
        fetch(`https://globify-tourism-server.vercel.app/touristSpot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(touristInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist spot updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>

            <div className="text-center border-2 border-gray-400">
                <h1 className="text-5xl w-full lg:w-3/4 mx-auto font-bold">Add New Tourist Spot</h1>
                <p className="py-6">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <div className="hero border-2 border-gray-400 rounded-t-none card shadow-xl min-h-screen">

                <form onSubmit={handleUpdate} className="card-body">
                    <div className="flex flex-col md:flex-row gap-5">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tourists Spot Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <select name="country" className="select select-bordered md:w-52">
                                <option disabled selected>{country}</option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" defaultValue={location} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="text" name="cost" defaultValue={cost} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input type="text" name="season" defaultValue={season} className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" name="travelTime" defaultValue={travelTime} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Visitors per year</span>
                            </label>
                            <input type="text" name="totalVisitors" defaultValue={totalVisitors} className="input input-bordered" required />
                        </div>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn hover:bg-[#D2B48C] hover:text-white" value="Update Now" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Updated;