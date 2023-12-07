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
export type FaCcPaypalProps = typeof __propDef.props;
export type FaCcPaypalEvents = typeof __propDef.events;
export type FaCcPaypalSlots = typeof __propDef.slots;
export default class FaCcPaypal extends SvelteComponentTyped<FaCcPaypalProps, FaCcPaypalEvents, FaCcPaypalSlots> {
}
export {};
