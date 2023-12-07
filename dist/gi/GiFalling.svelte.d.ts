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
export type GiFallingProps = typeof __propDef.props;
export type GiFallingEvents = typeof __propDef.events;
export type GiFallingSlots = typeof __propDef.slots;
export default class GiFalling extends SvelteComponentTyped<GiFallingProps, GiFallingEvents, GiFallingSlots> {
}
export {};
