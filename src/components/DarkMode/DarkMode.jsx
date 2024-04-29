import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";

const DarkMode = () => {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        if (mode == 'dark') {
            document.documentElement.setAttribute('data-theme' ,'dark')
        }
        else {
            document.documentElement.setAttribute('data-theme' ,'light')
        }
    }, [mode])
    const handleMode = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');

    }

    return (
        <>
            <button className="btn text-white hover:text-black bg-[#D2B48C]" onClick={handleMode}>
                {mode === "light" ? <IoMdMoon />: <LuSunMoon />}
            </button>
        </>
    );
};

export default DarkMode;