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
export type GiCannonBallProps = typeof __propDef.props;
export type GiCannonBallEvents = typeof __propDef.events;
export type GiCannonBallSlots = typeof __propDef.slots;
export default class GiCannonBall extends SvelteComponentTyped<GiCannonBallProps, GiCannonBallEvents, GiCannonBallSlots> {
}
export {};
