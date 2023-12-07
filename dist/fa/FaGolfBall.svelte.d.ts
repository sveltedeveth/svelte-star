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
export type FaGolfBallProps = typeof __propDef.props;
export type FaGolfBallEvents = typeof __propDef.events;
export type FaGolfBallSlots = typeof __propDef.slots;
export default class FaGolfBall extends SvelteComponentTyped<FaGolfBallProps, FaGolfBallEvents, FaGolfBallSlots> {
}
export {};
