import { googleLogout } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate()
    const handleLogout = () => {
        googleLogout();
        navigate("/Login")
    };

    return (
        <div>
            <button 
            className="bg-slate-100 px-6 py-1.5 rounded-md font-bold text-blue-400"
            onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout;
