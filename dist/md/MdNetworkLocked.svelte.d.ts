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
export type MdNetworkLockedProps = typeof __propDef.props;
export type MdNetworkLockedEvents = typeof __propDef.events;
export type MdNetworkLockedSlots = typeof __propDef.slots;
export default class MdNetworkLocked extends SvelteComponentTyped<MdNetworkLockedProps, MdNetworkLockedEvents, MdNetworkLockedSlots> {
}
export {};
