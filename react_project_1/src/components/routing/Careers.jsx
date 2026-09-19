import { useContext } from "react";
import { Link, Outlet } from "react-router"
import { UserContext } from "../../utils/userContext";
import { ThemeContext } from "../../utils/themeContext";

export default function Careers() {
    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);

    const updateUser = () => {
        userContext.setLoggedinUser('Sanjay')
    }
    const updateTheme = () => {
        themeContext.toggleTheme('dark')
    }
    return <>
        <h1 className="text-center">This is Careers Component</h1>
        <h4>Current user: {userContext.user.name}</h4>
        <h4>Current theme: {themeContext.theme}</h4>
        <button onClick={updateUser}>Login</button>
        <button onClick={updateTheme} className='mx-1'>
            Set {themeContext.theme == 'dark' ? 'Light' : 'Dark'} Theme
        </button>

        <hr />
        <div>
            <Link to="permanent" className="mx-2">Permanent Jobs</Link>
            <Link to="contract">Contract Jobs</Link>
        </div>
        <Outlet />
    </>
}
