import { useContext, useState } from "react";
import { authContext } from "../../components/Providers/AuthProvider";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { auth } from "../../Firebase/Firebase.config";

const Login = () => {
    const { createLogin, error, setError, createGoogleUser, createGithubUser} = useContext(authContext);
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
                if (error.message) {
                    setError('Email or password is wrong')
                }

            })
    }

    // login by google
    const handleGoogleLogin = () => {
        createGoogleUser()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')      
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successfully by Google',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // login by github
    const handleGithubLogin = () => {
        createGithubUser()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(location?.state ? location.state : '/')
                
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successfully by GitHub',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="flex justify-center items-center ">
                <div className="border-2 border-gray-400 card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="p-5 card-body bg-[url('../assets/7.jpg')]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="grow p-2 rounded-lg"
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
                            <button className="btn hover:bg-[#D2B48C] hover:text-white">Login</button>
                        </div>
                        <p>Do not have an account? Please <Link to="/register" className="text-blue-700 font-semibold">Register</Link></p>
                    </form>

                    <div className="divider">OR</div>
                    <div onClick={handleGoogleLogin} className="form-control mt-6">
                        <button className="btn hover:bg-[#D2B48C] hover:text-white w-4/5 mx-auto ">Login By Google</button>
                    </div>
                    <div className="form-control my-6">
                        <button onClick={handleGithubLogin} className="btn  w-4/5 mx-auto hover:bg-[#D2B48C] hover:text-white">Login by GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;