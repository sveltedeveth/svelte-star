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
export type GiUnlockingProps = typeof __propDef.props;
export type GiUnlockingEvents = typeof __propDef.events;
export type GiUnlockingSlots = typeof __propDef.slots;
export default class GiUnlocking extends SvelteComponentTyped<GiUnlockingProps, GiUnlockingEvents, GiUnlockingSlots> {
}
export {};
