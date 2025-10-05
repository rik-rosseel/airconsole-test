import {
    Text
} from 'pixi.js';
import {
    useRef,
} from 'react';

type Props = {
    text: string;
}

export function Label({ text }: Props) {
    const labelRef = useRef<Text | null>(null)


    return (
        <pixiText
            ref={labelRef}
            text={text}
            anchor={0.5}
            eventMode={'static'}
            x={window.innerWidth/2}
            y={window.innerHeight/3} />
    );
}
