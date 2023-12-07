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
export type FaIceCreamProps = typeof __propDef.props;
export type FaIceCreamEvents = typeof __propDef.events;
export type FaIceCreamSlots = typeof __propDef.slots;
export default class FaIceCream extends SvelteComponentTyped<FaIceCreamProps, FaIceCreamEvents, FaIceCreamSlots> {
}
export {};
