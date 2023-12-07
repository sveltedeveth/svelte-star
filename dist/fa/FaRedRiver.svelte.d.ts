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
export type FaRedRiverProps = typeof __propDef.props;
export type FaRedRiverEvents = typeof __propDef.events;
export type FaRedRiverSlots = typeof __propDef.slots;
export default class FaRedRiver extends SvelteComponentTyped<FaRedRiverProps, FaRedRiverEvents, FaRedRiverSlots> {
}
export {};
