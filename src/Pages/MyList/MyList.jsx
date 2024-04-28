import { useContext, useEffect, useState } from "react";
import { authContext } from "../../components/Providers/AuthProvider";
import MyCard from "../../components/MyCard/MyCard";


const MyList = () => {
    const {user} = useContext(authContext) || {};
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/tourist/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setItems(data)
        })
    },[user])
    // console.log(items)
    return (
        <div>
            <h1>My Tourist spots:{items.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
                {
                    items.map(item=><MyCard items={items} setItems={setItems} key={item._id} item={item}></MyCard>)
                }
            </div>

        </div>
    );
};

export default MyList;