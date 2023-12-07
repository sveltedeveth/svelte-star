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
export type GiBrainFreezeProps = typeof __propDef.props;
export type GiBrainFreezeEvents = typeof __propDef.events;
export type GiBrainFreezeSlots = typeof __propDef.slots;
export default class GiBrainFreeze extends SvelteComponentTyped<GiBrainFreezeProps, GiBrainFreezeEvents, GiBrainFreezeSlots> {
}
export {};
