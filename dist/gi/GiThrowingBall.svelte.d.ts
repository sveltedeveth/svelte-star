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
export type GiThrowingBallProps = typeof __propDef.props;
export type GiThrowingBallEvents = typeof __propDef.events;
export type GiThrowingBallSlots = typeof __propDef.slots;
export default class GiThrowingBall extends SvelteComponentTyped<GiThrowingBallProps, GiThrowingBallEvents, GiThrowingBallSlots> {
}
export {};
