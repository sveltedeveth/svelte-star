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
export type GiLockPickingProps = typeof __propDef.props;
export type GiLockPickingEvents = typeof __propDef.events;
export type GiLockPickingSlots = typeof __propDef.slots;
export default class GiLockPicking extends SvelteComponentTyped<GiLockPickingProps, GiLockPickingEvents, GiLockPickingSlots> {
}
export {};
