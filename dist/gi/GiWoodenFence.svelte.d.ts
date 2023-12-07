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
export type GiWoodenFenceProps = typeof __propDef.props;
export type GiWoodenFenceEvents = typeof __propDef.events;
export type GiWoodenFenceSlots = typeof __propDef.slots;
export default class GiWoodenFence extends SvelteComponentTyped<GiWoodenFenceProps, GiWoodenFenceEvents, GiWoodenFenceSlots> {
}
export {};
