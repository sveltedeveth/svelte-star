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
export type FaAppStoreProps = typeof __propDef.props;
export type FaAppStoreEvents = typeof __propDef.events;
export type FaAppStoreSlots = typeof __propDef.slots;
export default class FaAppStore extends SvelteComponentTyped<FaAppStoreProps, FaAppStoreEvents, FaAppStoreSlots> {
}
export {};
