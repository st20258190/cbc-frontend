import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    // Handle form submission
    function handleSubmit(e) {
         e.preventDefault(); // ⛔ Prevent page reload
        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
            email: email,
            password: password
        }).then((response) => {
            console.log("Login successful:", response.data);
            localStorage.setItem("token", response.data.token);
            toast.success("Login successful!");
            if (response.data.role == "admin") {
                // Redirect to admin page
                navigate("/admin");
            }else{
                // Redirect to user page or home
                // window.location.href = "/";
                navigate("/");
            }
        }).catch((error) => {
            // Handle network or server errors
            console.error("Error during login:", error);
            toast.error("Login failed. Please check your credentials.");
        });
    }
    return(
       <div className="w-full h-screen bg-[url(./login_bg.jpg)] bg-cover bg-center flex justify-center items-center px-4">
            <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-md bg-white/60 border border-white/30">
                <h1 className="text-4xl font-semibold text-center mb-8 tracking-wider text-gray-800 drop-shadow">
                    Login
                </h1>

                <form className="space-y-6">
                    <div className="flex flex-col">
                        <label className="text-md font-medium text-gray-700 mb-1 ml-1" htmlFor="email">
                        Email
                        </label>
                        <input
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="you@example.com"
                        className="h-11 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-md font-medium text-gray-700 mb-1 ml-1" htmlFor="password">
                        Password
                        </label>
                        <input
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="••••••••"
                        className="h-11 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <button onClick={handleSubmit} type="submit" className="w-full h-11 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl transition duration-200 shadow-md cursor-pointer">
                        Sign In
                    </button>
                </form>

                <p className="text-sm text-center mt-6 text-gray-600">
                    Don't have an account?
                    <Link className="text-rose-600 font-medium ml-1 hover:underline">Sign up</Link>
                </p>

            </div>
        </div>

    )
}