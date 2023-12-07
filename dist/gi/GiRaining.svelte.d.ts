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
export type GiRainingProps = typeof __propDef.props;
export type GiRainingEvents = typeof __propDef.events;
export type GiRainingSlots = typeof __propDef.slots;
export default class GiRaining extends SvelteComponentTyped<GiRainingProps, GiRainingEvents, GiRainingSlots> {
}
export {};
