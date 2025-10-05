import { Application, extend } from "@pixi/react";
import { BunnySprite } from "./components/sprites/BunnySprite.tsx";
import { useEffect, useRef, useState } from "react";
import { Container, Graphics, Sprite, Text } from "pixi.js";
import { Label } from "./components/ui/Label.tsx";

extend({
    Container,
    Graphics,
    Sprite,
    Text,
});

function App() {

    const parentRef = useRef(null);
    const airconsoleRef = useRef<AirConsole | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    // Use useMemo hook for initialising AirConsole?
    useEffect(() => {
        console.log(AirConsole)
            const airconsole = new AirConsole();
            airconsole.onMessage = (device_id, data) => {
                console.log(device_id, data);
                setMessage(data as string);
            }
            airconsoleRef.current = airconsole;
    }, []);

    return (
        <div ref={parentRef}>
            <Application resizeTo={parentRef} background={0x1099bb}>
                <BunnySprite/>
                { message && <Label text={message} /> }
            </Application>
        </div>
    )
}

export default App
