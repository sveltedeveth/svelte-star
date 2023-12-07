import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaBasketballBallProps = typeof __propDef.props;
export type FaBasketballBallEvents = typeof __propDef.events;
export type FaBasketballBallSlots = typeof __propDef.slots;
export default class FaBasketballBall extends SvelteComponentTyped<FaBasketballBallProps, FaBasketballBallEvents, FaBasketballBallSlots> {
}
export {};
