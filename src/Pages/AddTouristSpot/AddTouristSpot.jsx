import { useContext } from "react";
import Swal from "sweetalert2";
import { authContext } from "../../components/Providers/AuthProvider";

const AddTouristSpot = () => {
    const { user, } = useContext(authContext);
    const handleAddSpot = (e) => {
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
        // console.log(country)
        // console.log(touristInfo);
        const touristInfo = { name, userName, userEmail, country, location, photo, cost, season, travelTime, totalVisitors, description }

        //sent data to the server site
        fetch('https://globify-tourism-server.vercel.app/touristSpot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(touristInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist spot added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>

            <div className="text-center">
                <h1 className="text-5xl w-full lg:w-3/4 mx-auto py-6 font-bold">Add New Tourist Spot</h1>
               
            </div>
            <div className="hero card shadow-xl min-h-screen border-2 border-gray-400">

                <form onSubmit={handleAddSpot} className="card-body">
                    <div className="flex flex-col md:flex-row gap-5">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tourists Spot Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Tourists Spot Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <select name="country" className="select select-bordered md:w-52">
                                <option disabled selected>Select Country</option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>
                            {/* <input type="text" name="country" placeholder="Enter Country Name" className="input input-bordered" required /> */}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Enter Location" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter PhotoURL" className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="text" name="cost" placeholder="Enter Average Cost" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input type="text" name="season" placeholder="Like summer, winter" className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" name="travelTime" placeholder="Like 5 days" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Visitors per year</span>
                            </label>
                            <input type="text" name="totalVisitors" placeholder="Enter visitors number" className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="UserName" value={user.displayName} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" name="UserEmail" value={user.email} className="input input-bordered" readOnly />
                        </div>

                    </div>

                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="description" placeholder="write description" className="input input-bordered" required />
                        </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn hover:bg-[#D2B48C] hover:text-white" value="Add Tourist Spot" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;