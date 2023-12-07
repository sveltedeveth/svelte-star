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
export type FaFootballBallProps = typeof __propDef.props;
export type FaFootballBallEvents = typeof __propDef.events;
export type FaFootballBallSlots = typeof __propDef.slots;
export default class FaFootballBall extends SvelteComponentTyped<FaFootballBallProps, FaFootballBallEvents, FaFootballBallSlots> {
}
export {};
