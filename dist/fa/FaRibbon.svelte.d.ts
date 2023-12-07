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
export type FaRibbonProps = typeof __propDef.props;
export type FaRibbonEvents = typeof __propDef.events;
export type FaRibbonSlots = typeof __propDef.slots;
export default class FaRibbon extends SvelteComponentTyped<FaRibbonProps, FaRibbonEvents, FaRibbonSlots> {
}
export {};
