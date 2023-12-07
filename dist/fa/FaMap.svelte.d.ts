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
export type FaMapProps = typeof __propDef.props;
export type FaMapEvents = typeof __propDef.events;
export type FaMapSlots = typeof __propDef.slots;
export default class FaMap extends SvelteComponentTyped<FaMapProps, FaMapEvents, FaMapSlots> {
}
export {};
