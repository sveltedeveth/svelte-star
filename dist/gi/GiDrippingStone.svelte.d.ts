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
export type GiDrippingStoneProps = typeof __propDef.props;
export type GiDrippingStoneEvents = typeof __propDef.events;
export type GiDrippingStoneSlots = typeof __propDef.slots;
export default class GiDrippingStone extends SvelteComponentTyped<GiDrippingStoneProps, GiDrippingStoneEvents, GiDrippingStoneSlots> {
}
export {};
