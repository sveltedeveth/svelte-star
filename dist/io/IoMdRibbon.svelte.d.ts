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
export type IoMdRibbonProps = typeof __propDef.props;
export type IoMdRibbonEvents = typeof __propDef.events;
export type IoMdRibbonSlots = typeof __propDef.slots;
export default class IoMdRibbon extends SvelteComponentTyped<IoMdRibbonProps, IoMdRibbonEvents, IoMdRibbonSlots> {
}
export {};
