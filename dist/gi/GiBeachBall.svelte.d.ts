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
export type GiBeachBallProps = typeof __propDef.props;
export type GiBeachBallEvents = typeof __propDef.events;
export type GiBeachBallSlots = typeof __propDef.slots;
export default class GiBeachBall extends SvelteComponentTyped<GiBeachBallProps, GiBeachBallEvents, GiBeachBallSlots> {
}
export {};
