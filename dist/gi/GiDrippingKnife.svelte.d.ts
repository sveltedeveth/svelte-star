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
export type GiDrippingKnifeProps = typeof __propDef.props;
export type GiDrippingKnifeEvents = typeof __propDef.events;
export type GiDrippingKnifeSlots = typeof __propDef.slots;
export default class GiDrippingKnife extends SvelteComponentTyped<GiDrippingKnifeProps, GiDrippingKnifeEvents, GiDrippingKnifeSlots> {
}
export {};
