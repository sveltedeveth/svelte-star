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
export type FaDraftingCompassProps = typeof __propDef.props;
export type FaDraftingCompassEvents = typeof __propDef.events;
export type FaDraftingCompassSlots = typeof __propDef.slots;
export default class FaDraftingCompass extends SvelteComponentTyped<FaDraftingCompassProps, FaDraftingCompassEvents, FaDraftingCompassSlots> {
}
export {};
