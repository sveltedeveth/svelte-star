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
export type GiSausagesRibbonProps = typeof __propDef.props;
export type GiSausagesRibbonEvents = typeof __propDef.events;
export type GiSausagesRibbonSlots = typeof __propDef.slots;
export default class GiSausagesRibbon extends SvelteComponentTyped<GiSausagesRibbonProps, GiSausagesRibbonEvents, GiSausagesRibbonSlots> {
}
export {};
