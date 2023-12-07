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
export type GiPillDropProps = typeof __propDef.props;
export type GiPillDropEvents = typeof __propDef.events;
export type GiPillDropSlots = typeof __propDef.slots;
export default class GiPillDrop extends SvelteComponentTyped<GiPillDropProps, GiPillDropEvents, GiPillDropSlots> {
}
export {};
