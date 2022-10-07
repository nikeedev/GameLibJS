import { Keys } from './Keys.js';
import { Vector2 } from '../../math/Vector2.js';
declare class Event {
    static keysPressed: {};
    static mouseBtnsPressed: {};
    static mousePos: Vector2;
    constructor();
    static KeyPressed(key: Keys): boolean;
    static mouseBtnPressed(btn: any): boolean;
}
export { Event };