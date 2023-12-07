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
export type FaCcAmexProps = typeof __propDef.props;
export type FaCcAmexEvents = typeof __propDef.events;
export type FaCcAmexSlots = typeof __propDef.slots;
export default class FaCcAmex extends SvelteComponentTyped<FaCcAmexProps, FaCcAmexEvents, FaCcAmexSlots> {
}
export {};
