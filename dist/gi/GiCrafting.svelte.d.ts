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
export type GiCraftingProps = typeof __propDef.props;
export type GiCraftingEvents = typeof __propDef.events;
export type GiCraftingSlots = typeof __propDef.slots;
export default class GiCrafting extends SvelteComponentTyped<GiCraftingProps, GiCraftingEvents, GiCraftingSlots> {
}
export {};
