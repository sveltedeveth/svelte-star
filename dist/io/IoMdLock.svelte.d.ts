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
export type IoMdLockProps = typeof __propDef.props;
export type IoMdLockEvents = typeof __propDef.events;
export type IoMdLockSlots = typeof __propDef.slots;
export default class IoMdLock extends SvelteComponentTyped<IoMdLockProps, IoMdLockEvents, IoMdLockSlots> {
}
export {};
