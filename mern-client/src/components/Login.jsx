import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import googleLogo from '../assets/google-logo.svg'
import fbLogo from '../assets/facebook-log.svg'

export default function Login() {
    const [ErrorMessage, setErrorMessage] = useState('');
    const { signUpWithGmail, login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    // login with google
    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
        }).catch((error) => console.log(error))
    }

    // login with email password
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password).then((result) => {
            const user = result.user;
            console.log(user);
            alert("Login successful!");
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
        });
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 flex justify-center items-center">
            <div className="relative w-full sm:max-w-md bg-white p-8 rounded-xl shadow-lg">

                {/* Heading */}
                <h1 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Login to Your Account</h1>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                            placeholder="Email address"
                            required
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div>
                        {ErrorMessage && (
                            <p className="text-sm text-red-500">{ErrorMessage}</p>
                        )}
                        <p className="text-base mt-1">
                            Don't have an account?{' '}
                            <Link to="/create-user" className="underline text-blue-600">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                    <div>
                        <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                            Login
                        </button>
                    </div>
                </form>

                {/* Social Login Section */}
                <div className="mt-6">
                    <hr />
                    <div className="flex flex-col gap-4 mt-5">
                        <button onClick={handleRegister} className="flex items-center justify-center gap-3 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-100 transition-all">
                            <img src={googleLogo} alt="Google logo" className="w-6 h-6" />
                            Log in with Google
                        </button>
                        <button className="flex items-center justify-center gap-3 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-100 transition-all">
                            <img src={fbLogo} alt="Facebook logo" className="w-6 h-6" />
                            Log in with Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
