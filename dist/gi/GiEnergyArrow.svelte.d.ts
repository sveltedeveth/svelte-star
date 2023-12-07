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
export type GiEnergyArrowProps = typeof __propDef.props;
export type GiEnergyArrowEvents = typeof __propDef.events;
export type GiEnergyArrowSlots = typeof __propDef.slots;
export default class GiEnergyArrow extends SvelteComponentTyped<GiEnergyArrowProps, GiEnergyArrowEvents, GiEnergyArrowSlots> {
}
export {};
