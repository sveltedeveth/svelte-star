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
export type GiDrippingStarProps = typeof __propDef.props;
export type GiDrippingStarEvents = typeof __propDef.events;
export type GiDrippingStarSlots = typeof __propDef.slots;
export default class GiDrippingStar extends SvelteComponentTyped<GiDrippingStarProps, GiDrippingStarEvents, GiDrippingStarSlots> {
}
export {};
