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
export type GiCogLockProps = typeof __propDef.props;
export type GiCogLockEvents = typeof __propDef.events;
export type GiCogLockSlots = typeof __propDef.slots;
export default class GiCogLock extends SvelteComponentTyped<GiCogLockProps, GiCogLockEvents, GiCogLockSlots> {
}
export {};
