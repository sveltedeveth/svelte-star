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
export type GiChickenLegProps = typeof __propDef.props;
export type GiChickenLegEvents = typeof __propDef.events;
export type GiChickenLegSlots = typeof __propDef.slots;
export default class GiChickenLeg extends SvelteComponentTyped<GiChickenLegProps, GiChickenLegEvents, GiChickenLegSlots> {
}
export {};
