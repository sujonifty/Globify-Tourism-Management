
const AddTouristSpot = () => {
    const handleAddSpot = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const country = e.target.country.value;
        const location = e.target.location.value;
        const photo = e.target.photo.value;
        const cost = e.target.cost.value;
        const seasonality = e.target.seasonality.value;
        const time = e.target.time.value;
        const visitor = e.target.visitor.value;
        const description = e.target.description.value;
        const TouristInfo ={name, country, location, photo, cost, seasonality, time, visitor, description}
        console.log(TouristInfo)
    }
    return (
        <div>

            <div className="text-center">
                <h1 className="text-5xl w-full lg:w-3/4 mx-auto font-bold">Add New Tourist Spot</h1>
                <p className="py-6">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <div className="hero min-h-screen bg-[#F4F3F0]">

                <form onSubmit={handleAddSpot} className="card-body">
                    <div className="flex gap-5">

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
                            <input type="text" name="country" placeholder="Enter Country Name" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-5">
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
                    <div className="flex gap-5">
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
                            <input type="text" name="seasonality " placeholder="like summer, winter" className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="flex gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" name="time " placeholder="like summer, winter" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </label>
                            <input type="text" name="visitor " placeholder="Enter Total Visitor" className="input input-bordered" required />
                        </div>

                    </div>

                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea name="description" placeholder="Write Short Description" className="textarea textarea-bordered textarea-xs w-full" required></textarea>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn bg-[#D2B48C]" value="Add Tourist Spot" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;