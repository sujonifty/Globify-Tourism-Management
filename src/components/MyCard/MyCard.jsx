import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";


const MyCard = ({item,items, setItems}) => {
    const {_id, name, country, location,photo,cost, season,travelTime,totalVisitors, description} = item;
    
    const handleDelete =(_id)=>{
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

            fetch(`http://localhost:5000/touristSpot/${_id}`, {
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
                        const remains = items.filter(singleItem=> singleItem._id !== _id);
                        setItems(remains);
                    }
                })
        }

    });
}
    return (
        <div>
            <div>
               <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                   <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                   <div className="flex flex-col justify-between p-6 space-y-8">
                       <div className="space-y-2">
                           <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                           <p className="dark:text-gray-800">{description.slice(0, 100)}</p>
                           <div className="flex justify-evenly items-center">
                               <NavLink to={`/update/${_id}`}><button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Update</button></NavLink>
                               <NavLink><button onClick={()=>handleDelete(_id)} type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Delete</button></NavLink>

                           </div>
                       </div>
                       <NavLink to={`/cardDetails/${_id}`}><button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button></NavLink>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default MyCard;