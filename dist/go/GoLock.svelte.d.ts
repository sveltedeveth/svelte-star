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
export type GoLockProps = typeof __propDef.props;
export type GoLockEvents = typeof __propDef.events;
export type GoLockSlots = typeof __propDef.slots;
export default class GoLock extends SvelteComponentTyped<GoLockProps, GoLockEvents, GoLockSlots> {
}
export {};
