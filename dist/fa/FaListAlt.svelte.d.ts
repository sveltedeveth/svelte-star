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
export type FaListAltProps = typeof __propDef.props;
export type FaListAltEvents = typeof __propDef.events;
export type FaListAltSlots = typeof __propDef.slots;
export default class FaListAlt extends SvelteComponentTyped<FaListAltProps, FaListAltEvents, FaListAltSlots> {
}
export {};
