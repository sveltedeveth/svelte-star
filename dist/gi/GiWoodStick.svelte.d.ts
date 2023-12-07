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
export type GiWoodStickProps = typeof __propDef.props;
export type GiWoodStickEvents = typeof __propDef.events;
export type GiWoodStickSlots = typeof __propDef.slots;
export default class GiWoodStick extends SvelteComponentTyped<GiWoodStickProps, GiWoodStickEvents, GiWoodStickSlots> {
}
export {};
