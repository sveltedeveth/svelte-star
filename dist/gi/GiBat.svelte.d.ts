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
export type GiBatProps = typeof __propDef.props;
export type GiBatEvents = typeof __propDef.events;
export type GiBatSlots = typeof __propDef.slots;
export default class GiBat extends SvelteComponentTyped<GiBatProps, GiBatEvents, GiBatSlots> {
}
export {};
