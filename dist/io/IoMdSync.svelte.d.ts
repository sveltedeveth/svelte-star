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
export type IoMdSyncProps = typeof __propDef.props;
export type IoMdSyncEvents = typeof __propDef.events;
export type IoMdSyncSlots = typeof __propDef.slots;
export default class IoMdSync extends SvelteComponentTyped<IoMdSyncProps, IoMdSyncEvents, IoMdSyncSlots> {
}
export {};
