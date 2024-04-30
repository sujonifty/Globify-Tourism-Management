import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const MyCard = ({ item, items, setItems }) => {
    const { _id, name, country, location, photo, cost, season, travelTime, totalVisitors, description } = item;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://globify-tourism-server.vercel.app/touristSpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remains = items.filter(singleItem => singleItem._id !== _id);
                            setItems(remains);
                        }
                    })
            }

        });
    }
    return (
        <div>
            <section>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Average Cost</th>
                                <th>Country</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>{name}</td>
                                <td>{cost}</td>
                                <td>{country}</td>
                                <td>
                                    <NavLink to={`/update/${_id}`}><button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Update</button></NavLink>
                                </td>
                                <td>
                                    <NavLink><button onClick={() => handleDelete(_id)} type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Delete</button></NavLink>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
          
        </div>
    );
};
MyCard.propTypes = {
    item: PropTypes.object,
    items: PropTypes.object,
    setItems: PropTypes.func,
}
export default MyCard;