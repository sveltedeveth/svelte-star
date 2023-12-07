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
export type MdWifiLockProps = typeof __propDef.props;
export type MdWifiLockEvents = typeof __propDef.events;
export type MdWifiLockSlots = typeof __propDef.slots;
export default class MdWifiLock extends SvelteComponentTyped<MdWifiLockProps, MdWifiLockEvents, MdWifiLockSlots> {
}
export {};
