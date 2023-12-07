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
export type GiEightBallProps = typeof __propDef.props;
export type GiEightBallEvents = typeof __propDef.events;
export type GiEightBallSlots = typeof __propDef.slots;
export default class GiEightBall extends SvelteComponentTyped<GiEightBallProps, GiEightBallEvents, GiEightBallSlots> {
}
export {};
