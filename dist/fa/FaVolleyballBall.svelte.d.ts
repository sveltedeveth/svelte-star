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
export type FaVolleyballBallProps = typeof __propDef.props;
export type FaVolleyballBallEvents = typeof __propDef.events;
export type FaVolleyballBallSlots = typeof __propDef.slots;
export default class FaVolleyballBall extends SvelteComponentTyped<FaVolleyballBallProps, FaVolleyballBallEvents, FaVolleyballBallSlots> {
}
export {};
