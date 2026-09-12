import { useEffect } from "react";

export default function WithLogger(InputComponent) {
    return function EnhancedComponent(props) {
        useEffect(() => {
            console.log(`${InputComponent.name} mounted`);
            return () => {
                console.log(`${InputComponent.name} unmounted`);
            };
        }, []);
        console.log(`${InputComponent.name} rendered`);
        return <InputComponent {...props} />;
    };
}
