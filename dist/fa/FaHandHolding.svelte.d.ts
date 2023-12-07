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
export type FaHandHoldingProps = typeof __propDef.props;
export type FaHandHoldingEvents = typeof __propDef.events;
export type FaHandHoldingSlots = typeof __propDef.slots;
export default class FaHandHolding extends SvelteComponentTyped<FaHandHoldingProps, FaHandHoldingEvents, FaHandHoldingSlots> {
}
export {};
