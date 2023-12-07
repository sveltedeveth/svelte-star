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
export type GiMeepleGroupProps = typeof __propDef.props;
export type GiMeepleGroupEvents = typeof __propDef.events;
export type GiMeepleGroupSlots = typeof __propDef.slots;
export default class GiMeepleGroup extends SvelteComponentTyped<GiMeepleGroupProps, GiMeepleGroupEvents, GiMeepleGroupSlots> {
}
export {};
