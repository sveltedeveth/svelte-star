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
export type GiVolleyballBallProps = typeof __propDef.props;
export type GiVolleyballBallEvents = typeof __propDef.events;
export type GiVolleyballBallSlots = typeof __propDef.slots;
export default class GiVolleyballBall extends SvelteComponentTyped<GiVolleyballBallProps, GiVolleyballBallEvents, GiVolleyballBallSlots> {
}
export {};
