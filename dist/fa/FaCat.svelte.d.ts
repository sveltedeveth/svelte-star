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
export type FaCatProps = typeof __propDef.props;
export type FaCatEvents = typeof __propDef.events;
export type FaCatSlots = typeof __propDef.slots;
export default class FaCat extends SvelteComponentTyped<FaCatProps, FaCatEvents, FaCatSlots> {
}
export {};
