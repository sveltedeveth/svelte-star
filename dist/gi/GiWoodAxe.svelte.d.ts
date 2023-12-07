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
export type GiWoodAxeProps = typeof __propDef.props;
export type GiWoodAxeEvents = typeof __propDef.events;
export type GiWoodAxeSlots = typeof __propDef.slots;
export default class GiWoodAxe extends SvelteComponentTyped<GiWoodAxeProps, GiWoodAxeEvents, GiWoodAxeSlots> {
}
export {};
