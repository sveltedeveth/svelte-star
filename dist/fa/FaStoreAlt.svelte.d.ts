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
export type FaStoreAltProps = typeof __propDef.props;
export type FaStoreAltEvents = typeof __propDef.events;
export type FaStoreAltSlots = typeof __propDef.slots;
export default class FaStoreAlt extends SvelteComponentTyped<FaStoreAltProps, FaStoreAltEvents, FaStoreAltSlots> {
}
export {};
