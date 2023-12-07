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
export type IoIosRibbonProps = typeof __propDef.props;
export type IoIosRibbonEvents = typeof __propDef.events;
export type IoIosRibbonSlots = typeof __propDef.slots;
export default class IoIosRibbon extends SvelteComponentTyped<IoIosRibbonProps, IoIosRibbonEvents, IoIosRibbonSlots> {
}
export {};
