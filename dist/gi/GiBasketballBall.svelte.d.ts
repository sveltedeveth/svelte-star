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
export type GiBasketballBallProps = typeof __propDef.props;
export type GiBasketballBallEvents = typeof __propDef.events;
export type GiBasketballBallSlots = typeof __propDef.slots;
export default class GiBasketballBall extends SvelteComponentTyped<GiBasketballBallProps, GiBasketballBallEvents, GiBasketballBallSlots> {
}
export {};
