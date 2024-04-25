import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
    const location= useLocation();
    
    useEffect(()=>{
        if(location.pathname=='/'){
            document.title=`Home`
        }
        else{
            document.title= `${location.pathname.replace('/',"")}`;
        }
       
        if(location.state){
            document.title= location.state;
        }
    },[location.pathname])
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;