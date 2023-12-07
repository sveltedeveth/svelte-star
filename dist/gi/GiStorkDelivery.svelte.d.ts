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
export type GiStorkDeliveryProps = typeof __propDef.props;
export type GiStorkDeliveryEvents = typeof __propDef.events;
export type GiStorkDeliverySlots = typeof __propDef.slots;
export default class GiStorkDelivery extends SvelteComponentTyped<GiStorkDeliveryProps, GiStorkDeliveryEvents, GiStorkDeliverySlots> {
}
export {};
