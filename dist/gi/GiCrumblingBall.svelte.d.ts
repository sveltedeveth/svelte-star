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
export type GiCrumblingBallProps = typeof __propDef.props;
export type GiCrumblingBallEvents = typeof __propDef.events;
export type GiCrumblingBallSlots = typeof __propDef.slots;
export default class GiCrumblingBall extends SvelteComponentTyped<GiCrumblingBallProps, GiCrumblingBallEvents, GiCrumblingBallSlots> {
}
export {};
