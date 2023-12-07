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
export type GiDrippingTubeProps = typeof __propDef.props;
export type GiDrippingTubeEvents = typeof __propDef.events;
export type GiDrippingTubeSlots = typeof __propDef.slots;
export default class GiDrippingTube extends SvelteComponentTyped<GiDrippingTubeProps, GiDrippingTubeEvents, GiDrippingTubeSlots> {
}
export {};
