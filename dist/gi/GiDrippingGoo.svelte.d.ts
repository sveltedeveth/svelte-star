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
export type GiDrippingGooProps = typeof __propDef.props;
export type GiDrippingGooEvents = typeof __propDef.events;
export type GiDrippingGooSlots = typeof __propDef.slots;
export default class GiDrippingGoo extends SvelteComponentTyped<GiDrippingGooProps, GiDrippingGooEvents, GiDrippingGooSlots> {
}
export {};
