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
export type MdSyncProps = typeof __propDef.props;
export type MdSyncEvents = typeof __propDef.events;
export type MdSyncSlots = typeof __propDef.slots;
export default class MdSync extends SvelteComponentTyped<MdSyncProps, MdSyncEvents, MdSyncSlots> {
}
export {};
