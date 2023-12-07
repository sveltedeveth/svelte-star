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
export type FaEtsyProps = typeof __propDef.props;
export type FaEtsyEvents = typeof __propDef.events;
export type FaEtsySlots = typeof __propDef.slots;
export default class FaEtsy extends SvelteComponentTyped<FaEtsyProps, FaEtsyEvents, FaEtsySlots> {
}
export {};
