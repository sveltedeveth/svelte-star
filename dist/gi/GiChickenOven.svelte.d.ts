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
export type GiChickenOvenProps = typeof __propDef.props;
export type GiChickenOvenEvents = typeof __propDef.events;
export type GiChickenOvenSlots = typeof __propDef.slots;
export default class GiChickenOven extends SvelteComponentTyped<GiChickenOvenProps, GiChickenOvenEvents, GiChickenOvenSlots> {
}
export {};
