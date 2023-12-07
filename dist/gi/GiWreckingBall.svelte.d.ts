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
export type GiWreckingBallProps = typeof __propDef.props;
export type GiWreckingBallEvents = typeof __propDef.events;
export type GiWreckingBallSlots = typeof __propDef.slots;
export default class GiWreckingBall extends SvelteComponentTyped<GiWreckingBallProps, GiWreckingBallEvents, GiWreckingBallSlots> {
}
export {};
