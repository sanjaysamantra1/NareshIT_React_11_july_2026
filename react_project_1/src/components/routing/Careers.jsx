import { Link,Outlet } from "react-router"

export default function Careers() {
    return <>
        <h1 className="text-center">This is Careers Component</h1>
        <hr />
        <div>
            <Link to="permanent" className="mx-2">Permanent Jobs</Link>
            <Link to="contract">Contract Jobs</Link>
        </div>
        <Outlet />
    </>
}
