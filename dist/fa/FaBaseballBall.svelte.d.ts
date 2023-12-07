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
export type FaBaseballBallProps = typeof __propDef.props;
export type FaBaseballBallEvents = typeof __propDef.events;
export type FaBaseballBallSlots = typeof __propDef.slots;
export default class FaBaseballBall extends SvelteComponentTyped<FaBaseballBallProps, FaBaseballBallEvents, FaBaseballBallSlots> {
}
export {};
