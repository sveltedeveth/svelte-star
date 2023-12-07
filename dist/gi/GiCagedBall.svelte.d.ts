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
export type GiCagedBallProps = typeof __propDef.props;
export type GiCagedBallEvents = typeof __propDef.events;
export type GiCagedBallSlots = typeof __propDef.slots;
export default class GiCagedBall extends SvelteComponentTyped<GiCagedBallProps, GiCagedBallEvents, GiCagedBallSlots> {
}
export {};
