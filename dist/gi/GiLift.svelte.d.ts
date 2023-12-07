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
export type GiLiftProps = typeof __propDef.props;
export type GiLiftEvents = typeof __propDef.events;
export type GiLiftSlots = typeof __propDef.slots;
export default class GiLift extends SvelteComponentTyped<GiLiftProps, GiLiftEvents, GiLiftSlots> {
}
export {};
