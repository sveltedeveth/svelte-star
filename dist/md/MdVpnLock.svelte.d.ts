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
export type MdVpnLockProps = typeof __propDef.props;
export type MdVpnLockEvents = typeof __propDef.events;
export type MdVpnLockSlots = typeof __propDef.slots;
export default class MdVpnLock extends SvelteComponentTyped<MdVpnLockProps, MdVpnLockEvents, MdVpnLockSlots> {
}
export {};
