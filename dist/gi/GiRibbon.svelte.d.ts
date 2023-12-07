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
export type GiRibbonProps = typeof __propDef.props;
export type GiRibbonEvents = typeof __propDef.events;
export type GiRibbonSlots = typeof __propDef.slots;
export default class GiRibbon extends SvelteComponentTyped<GiRibbonProps, GiRibbonEvents, GiRibbonSlots> {
}
export {};
