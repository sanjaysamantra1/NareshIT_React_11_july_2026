import { lazy } from "react";
import { Link, useNavigate } from "react-router"
// import Heavy from "./Heavy";
const Heavy = lazy(() => import('./Heavy'));

export default function AboutUs() {
    const navigate = useNavigate();
    const doSomethingGoToHome = () => {
        console.log('Execute Some Logic....');
        navigate('/home')
    }
    return <>
        <h1 className="text-center">This is About Us Component</h1>

        <p><a href="/home">Go To Home</a></p>
        <p><Link to="/home">Go To Home</Link></p>

        <p><Link to="/home" onClick={doSomethingGoToHome}>Do Something & GoTo Home</Link></p>

        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate(1)}>Go Next</button>
        <hr/>

        <Heavy/>
    </>
}
