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
export type TiLockClosedProps = typeof __propDef.props;
export type TiLockClosedEvents = typeof __propDef.events;
export type TiLockClosedSlots = typeof __propDef.slots;
export default class TiLockClosed extends SvelteComponentTyped<TiLockClosedProps, TiLockClosedEvents, TiLockClosedSlots> {
}
export {};
