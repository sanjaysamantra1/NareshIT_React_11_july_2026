import { useContext } from "react";
import useClock from "../hooks/UseClock"
import { UserContext } from "../../utils/userContext";
import { ThemeContext } from "../../utils/themeContext";

export default function Home() {
    const date = useClock();
    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);
    console.log("userContext: ", userContext)
    return <>
        <h1 className="text-center">This is Home Component</h1>
        <h3>Time: {date.toLocaleTimeString()}</h3>
        <h3>Current User: {userContext.user.name}</h3>
        <h3>Current Theme: {themeContext.theme}</h3>
    </>
}
