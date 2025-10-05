import { Assets, type Sprite, Texture, Ticker } from 'pixi.js';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTick } from "@pixi/react";

export function BunnySprite() {
    const spriteRef = useRef<Sprite | null>(null)

    const [texture, setTexture] = useState(Texture.EMPTY)

    const onTick = useCallback((ticker: Ticker) => {
            if (spriteRef.current) {
                spriteRef.current.rotation += 0.05 * ticker.deltaTime;
            }
    }, [])

    useTick(onTick);

    useEffect(() => {
        if (texture === Texture.EMPTY) {
            Assets
                .load('https://pixijs.com/assets/bunny.png')
                .then((result) => {
                    setTexture(result)
                });
        }
    }, [texture]);

    return (
        <pixiSprite
            ref={spriteRef}
            anchor={0.5}
            eventMode={'static'}
            texture={texture}
            x={window.innerWidth/2}
            y={window.innerHeight/2} />
    );
}
