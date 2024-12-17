import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'

function Login({onLoginSuccess}) {
    const navigate = useNavigate()

    const handleLogin = async (credentialResponse) => {
        const { credential } = credentialResponse;

        const userInfo = jwtDecode(credential);
        console.log(userInfo)

        try {
            const response = await axios.post("http://localhost:5000/api/users", {
                googleId: userInfo.sub,
                name: userInfo.name,
                email: userInfo.email
            });

            console.log('User Saved:', response.data);
            navigate("/feedbackform")
            onLoginSuccess()
        } catch (error) {
            console.error('Error Saving User:', error);
        }
    };

    return (
        <div>
            <div className='bg-blue-100 h-screen flex justify-center items-center'>
                <div className='w-full h-full md:w-7/12 md:h-4/5 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-wrap relative'>

                    <div className='xl:w-1/2 w-full'>
                        <p className='absolute z-10 font-extrabold text-3xl md:text-4xl xl:text-5xl text-blue-400 pl-14 pt-10'>
                            Welcome to customer Feedback Platform
                        </p>

                    </div>
                    <div className='w-full h-full bg-blue-200 -rotate-12 -translate-x-1/2 translate-y-2 rounded-xl absolute'></div>

                    <div className='xl:w-1/2 w-full p-24 z-20 flex justify-center items-center'>
                        <div className='md:size-full mt-44'>
                            <p className='font-extrabold text-blue-400 text-4xl text-center mb-10'>Login</p>
                            <div className="flex justify-center">
                                <GoogleLogin
                                    onSuccess={handleLogin}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                    size="medium"
                                    text="signin_with"
                                    width={250}
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;
