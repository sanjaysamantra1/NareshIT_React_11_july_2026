import useClock from "../hooks/UseClock"

export default function Home() {
    const date = useClock();
    return <>
        <h1 className="text-center">This is Home Component</h1>
        <h2>Time: {date.toLocaleTimeString()}</h2>
    </>
}
