import { Rect, Size, Vector2, Text, Sprite, Sound, Input, Scene, Layer, about, Game } from './bin/index.js';
declare const GameEngine: {
    Graphics: {
        Rect: typeof Rect;
        Sprite: typeof Sprite;
        Text: typeof Text;
    };
    Info: {
        about: typeof about;
        version: string;
        build: string;
    };
    Sound: typeof Sound;
    Vector2: typeof Vector2;
    Size: typeof Size;
    Keys: {
        Cancel: number;
        Backspace: number;
        Tab: number;
        Clear: number;
        Enter: number;
        Shift: number;
        ControlLeft: number;
        AltLeft: number;
        Pause: number;
        CapsLook: number;
        Escape: number;
        Space: number;
        PageUp: number;
        PageDown: number;
        End: number;
        Home: number;
        ArrowLeft: number;
        ArrowUp: number;
        ArrowRight: number;
        ArrowDown: number;
        A: number;
        D: number;
        E: number;
        S: number;
        W: number;
    };
    Input: typeof Input;
    Scene: typeof Scene;
    Layer: typeof Layer;
    Game: typeof Game;
};
export { GameEngine };
export * from './bin/core/Info.js';
export * from './bin/math/Vector2.js';
export * from './bin/graphics/Sprite.js';
export * from './bin/math/Size.js';
export * from './bin/graphics/Rect.js';
export * from './bin/graphics/Text.js';
export * from './bin/core/input/Keys.js';
export * from './bin/core/input/Input.js';
export * from './bin/core/sound/Sound.js';
export * from './bin/core/Layer.js';
export * from './bin/core/Scene.js';
export * from './bin/core/Game.js';
