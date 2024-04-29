import { useContext, useEffect, useState } from "react";
import { authContext } from "../../components/Providers/AuthProvider";
// import MyCard from "../../components/MyCard/MyCard";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import TypeWriting from "../../components/HomeCard/TypeWrite/TypeWriting";


const MyList = () => {
    const { user } = useContext(authContext) || {};
    const [items, setItems] = useState([]);
    

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
    useEffect(() => {
        fetch(`https://globify-tourism-server.vercel.app/tourist/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [user])
    
    // console.log(items)
    return (
        <div>
            <div className="min-h-10 my-10">
                    <TypeWriting></TypeWriting>
                </div>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Tourist Spot</th>
                            <th>Average Cost</th>
                            <th>Country</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr key={item._id}>
                                <td>{item.userName }</td>
                                <td>{item.name }</td>
                                <td>{item.cost}</td>
                                <td>{item.country}</td>
                                <td>
                                    <NavLink to={`/update/${item._id}`}><button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Update</button></NavLink>
                                </td>
                                <td>
                                    <NavLink><button onClick={() => handleDelete(item._id)} type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Delete</button></NavLink>
                                </td>
                            </tr>
                            )
                        }



                    </tbody>
                </table>
            </div>
            {/* <div className="grid grid-cols-1  gap-5 mx-auto">
                {
                    items.map(item=><MyCard items={items} setItems={setItems} key={item._id} item={item}></MyCard>)
                }
            </div> */}

        </div>
    );
};

export default MyList;