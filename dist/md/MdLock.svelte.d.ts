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
export type MdLockProps = typeof __propDef.props;
export type MdLockEvents = typeof __propDef.events;
export type MdLockSlots = typeof __propDef.slots;
export default class MdLock extends SvelteComponentTyped<MdLockProps, MdLockEvents, MdLockSlots> {
}
export {};
