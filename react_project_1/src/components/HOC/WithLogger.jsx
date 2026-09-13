import { useEffect } from "react";

export default function WithLogger(InputComponent) {
    return function EnhancedComponent(props) {
        useEffect(() => {
            console.log(`Component ${InputComponent.name} mounted.`);
            return () => {
                console.log(`Component ${InputComponent.name} unmounted.`);
            };
        }, []);
        useEffect(() => {
            console.log(`Component ${InputComponent.name} updated.`);
        });
        console.log(`${InputComponent.name} rendered`);
        return <InputComponent {...props} />;
    };
}
