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
export type MdSyncDisabledProps = typeof __propDef.props;
export type MdSyncDisabledEvents = typeof __propDef.events;
export type MdSyncDisabledSlots = typeof __propDef.slots;
export default class MdSyncDisabled extends SvelteComponentTyped<MdSyncDisabledProps, MdSyncDisabledEvents, MdSyncDisabledSlots> {
}
export {};
