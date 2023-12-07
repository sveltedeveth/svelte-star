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
export type GiDrippingHoneyProps = typeof __propDef.props;
export type GiDrippingHoneyEvents = typeof __propDef.events;
export type GiDrippingHoneySlots = typeof __propDef.slots;
export default class GiDrippingHoney extends SvelteComponentTyped<GiDrippingHoneyProps, GiDrippingHoneyEvents, GiDrippingHoneySlots> {
}
export {};
