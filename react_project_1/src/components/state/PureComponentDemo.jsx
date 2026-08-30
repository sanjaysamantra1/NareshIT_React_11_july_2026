import { useState } from "react";

export default function PureComponentDemo() {
    const [name, setName] = useState("NareshIT");
    console.log('PureComponentDemo rendered....')
    return <>
        <div>PureComponent checks previous State and new State , if nothing changed , it skips re-rendering</div>
        <div>{name}</div>
        <button onClick={() => setName("NareshIT")}>Set name</button>
    </>
}
