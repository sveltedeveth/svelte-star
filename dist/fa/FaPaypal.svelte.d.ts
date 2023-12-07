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
export type FaPaypalProps = typeof __propDef.props;
export type FaPaypalEvents = typeof __propDef.events;
export type FaPaypalSlots = typeof __propDef.slots;
export default class FaPaypal extends SvelteComponentTyped<FaPaypalProps, FaPaypalEvents, FaPaypalSlots> {
}
export {};
