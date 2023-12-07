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
export type MdStoreProps = typeof __propDef.props;
export type MdStoreEvents = typeof __propDef.events;
export type MdStoreSlots = typeof __propDef.slots;
export default class MdStore extends SvelteComponentTyped<MdStoreProps, MdStoreEvents, MdStoreSlots> {
}
export {};
