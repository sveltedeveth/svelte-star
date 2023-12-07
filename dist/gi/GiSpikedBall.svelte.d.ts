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
export type GiSpikedBallProps = typeof __propDef.props;
export type GiSpikedBallEvents = typeof __propDef.events;
export type GiSpikedBallSlots = typeof __propDef.slots;
export default class GiSpikedBall extends SvelteComponentTyped<GiSpikedBallProps, GiSpikedBallEvents, GiSpikedBallSlots> {
}
export {};
