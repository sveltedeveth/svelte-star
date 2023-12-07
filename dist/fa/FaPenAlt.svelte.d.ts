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
export type FaPenAltProps = typeof __propDef.props;
export type FaPenAltEvents = typeof __propDef.events;
export type FaPenAltSlots = typeof __propDef.slots;
export default class FaPenAlt extends SvelteComponentTyped<FaPenAltProps, FaPenAltEvents, FaPenAltSlots> {
}
export {};
