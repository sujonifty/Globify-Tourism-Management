import { useContext, useState } from "react";
import { authContext } from "../../components/Providers/AuthProvider";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const { createLogin, error, setError } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    //Handle Login using email & password
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");

        createLogin(email, password)
            .then(result => {
                console.log(result.user);
                // const user = result.user
                // const userName = result.displayName;
                e.target.reset();
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                if(error.message){
                    setError('Email or password is wrong')
                }
                
            })
    }
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="p-5 card-body bg-[url('../assets/7.jpg')]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="grow"
                                placeholder="password" />

                            <span onClick={() => { setShowPassword(!showPassword) }}>
                                {
                                    showPassword ? <IoMdEyeOff /> : <IoMdEye />

                                }
                            </span>

                        </label>
                        {
                            error && <small className="text-red-700">{error}</small>
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500 text-white hover:text-black">Login</button>
                        </div>
                        <p>Already have an account? Please <Link to="/login" className="text-blue-700 font-semibold">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;