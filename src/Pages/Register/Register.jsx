import { useContext, useState } from "react";
import { authContext } from "../../components/Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import Swal from "sweetalert2";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";


const Register = () => {
    const { createUser, error, setError, setUser } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError("");

        if (password.length < 6) {
            setError('password must be 6 characters');
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setError('password must be an Uppercase & LowerCase letter');
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset();
                // update profile 
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,

                })
                    .then(() => {
                        setUser((prevUser) => {
                            return { ...prevUser, displayName: name, photoURL: photo, email: email }
                        })
                        console.log("profile updated");
                    })
                    .catch(error => {
                        setError(error.message);
                    })
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration successfully',
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
            <div className="flex justify-center items-center">
                <div className="card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="p-5 card-body bg-[url('../assets/7.jpg')]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name="photo" type="text" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
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
                            <button className="btn bg-[#D2B48C] text-white hover:text-black">Register</button>
                        </div>
                        <p>Already have an account? Please <Link to="/login" className="text-blue-700 font-semibold">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;