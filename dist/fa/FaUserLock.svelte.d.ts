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
export type FaUserLockProps = typeof __propDef.props;
export type FaUserLockEvents = typeof __propDef.events;
export type FaUserLockSlots = typeof __propDef.slots;
export default class FaUserLock extends SvelteComponentTyped<FaUserLockProps, FaUserLockEvents, FaUserLockSlots> {
}
export {};
