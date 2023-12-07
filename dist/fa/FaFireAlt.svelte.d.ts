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
export type FaFireAltProps = typeof __propDef.props;
export type FaFireAltEvents = typeof __propDef.events;
export type FaFireAltSlots = typeof __propDef.slots;
export default class FaFireAlt extends SvelteComponentTyped<FaFireAltProps, FaFireAltEvents, FaFireAltSlots> {
}
export {};
