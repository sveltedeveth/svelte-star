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
export type FaEbayProps = typeof __propDef.props;
export type FaEbayEvents = typeof __propDef.events;
export type FaEbaySlots = typeof __propDef.slots;
export default class FaEbay extends SvelteComponentTyped<FaEbayProps, FaEbayEvents, FaEbaySlots> {
}
export {};
