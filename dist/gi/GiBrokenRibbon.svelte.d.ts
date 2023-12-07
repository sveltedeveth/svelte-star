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
export type GiBrokenRibbonProps = typeof __propDef.props;
export type GiBrokenRibbonEvents = typeof __propDef.events;
export type GiBrokenRibbonSlots = typeof __propDef.slots;
export default class GiBrokenRibbon extends SvelteComponentTyped<GiBrokenRibbonProps, GiBrokenRibbonEvents, GiBrokenRibbonSlots> {
}
export {};
