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
export type GiStoneCraftingProps = typeof __propDef.props;
export type GiStoneCraftingEvents = typeof __propDef.events;
export type GiStoneCraftingSlots = typeof __propDef.slots;
export default class GiStoneCrafting extends SvelteComponentTyped<GiStoneCraftingProps, GiStoneCraftingEvents, GiStoneCraftingSlots> {
}
export {};
