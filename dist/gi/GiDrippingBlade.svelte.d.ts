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
export type GiDrippingBladeProps = typeof __propDef.props;
export type GiDrippingBladeEvents = typeof __propDef.events;
export type GiDrippingBladeSlots = typeof __propDef.slots;
export default class GiDrippingBlade extends SvelteComponentTyped<GiDrippingBladeProps, GiDrippingBladeEvents, GiDrippingBladeSlots> {
}
export {};
