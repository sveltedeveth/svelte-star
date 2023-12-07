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
export type GiRevolverProps = typeof __propDef.props;
export type GiRevolverEvents = typeof __propDef.events;
export type GiRevolverSlots = typeof __propDef.slots;
export default class GiRevolver extends SvelteComponentTyped<GiRevolverProps, GiRevolverEvents, GiRevolverSlots> {
}
export {};
