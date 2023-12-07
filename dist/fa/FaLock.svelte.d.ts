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
export type FaLockProps = typeof __propDef.props;
export type FaLockEvents = typeof __propDef.events;
export type FaLockSlots = typeof __propDef.slots;
export default class FaLock extends SvelteComponentTyped<FaLockProps, FaLockEvents, FaLockSlots> {
}
export {};
