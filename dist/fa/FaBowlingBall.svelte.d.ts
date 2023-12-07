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
export type FaBowlingBallProps = typeof __propDef.props;
export type FaBowlingBallEvents = typeof __propDef.events;
export type FaBowlingBallSlots = typeof __propDef.slots;
export default class FaBowlingBall extends SvelteComponentTyped<FaBowlingBallProps, FaBowlingBallEvents, FaBowlingBallSlots> {
}
export {};
