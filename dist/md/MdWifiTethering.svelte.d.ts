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
export type MdWifiTetheringProps = typeof __propDef.props;
export type MdWifiTetheringEvents = typeof __propDef.events;
export type MdWifiTetheringSlots = typeof __propDef.slots;
export default class MdWifiTethering extends SvelteComponentTyped<MdWifiTetheringProps, MdWifiTetheringEvents, MdWifiTetheringSlots> {
}
export {};
