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
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
