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
export type FaCartPlusProps = typeof __propDef.props;
export type FaCartPlusEvents = typeof __propDef.events;
export type FaCartPlusSlots = typeof __propDef.slots;
export default class FaCartPlus extends SvelteComponentTyped<FaCartPlusProps, FaCartPlusEvents, FaCartPlusSlots> {
}
export {};
