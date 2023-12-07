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
export type MdLocalShippingProps = typeof __propDef.props;
export type MdLocalShippingEvents = typeof __propDef.events;
export type MdLocalShippingSlots = typeof __propDef.slots;
export default class MdLocalShipping extends SvelteComponentTyped<MdLocalShippingProps, MdLocalShippingEvents, MdLocalShippingSlots> {
}
export {};
