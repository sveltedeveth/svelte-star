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
export type GiRoastChickenProps = typeof __propDef.props;
export type GiRoastChickenEvents = typeof __propDef.events;
export type GiRoastChickenSlots = typeof __propDef.slots;
export default class GiRoastChicken extends SvelteComponentTyped<GiRoastChickenProps, GiRoastChickenEvents, GiRoastChickenSlots> {
}
export {};
