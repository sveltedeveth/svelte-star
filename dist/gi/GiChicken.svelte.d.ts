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
export type GiChickenProps = typeof __propDef.props;
export type GiChickenEvents = typeof __propDef.events;
export type GiChickenSlots = typeof __propDef.slots;
export default class GiChicken extends SvelteComponentTyped<GiChickenProps, GiChickenEvents, GiChickenSlots> {
}
export {};
