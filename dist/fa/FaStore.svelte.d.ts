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
export type FaStoreProps = typeof __propDef.props;
export type FaStoreEvents = typeof __propDef.events;
export type FaStoreSlots = typeof __propDef.slots;
export default class FaStore extends SvelteComponentTyped<FaStoreProps, FaStoreEvents, FaStoreSlots> {
}
export {};
