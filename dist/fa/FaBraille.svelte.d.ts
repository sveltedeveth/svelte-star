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
export type FaBrailleProps = typeof __propDef.props;
export type FaBrailleEvents = typeof __propDef.events;
export type FaBrailleSlots = typeof __propDef.slots;
export default class FaBraille extends SvelteComponentTyped<FaBrailleProps, FaBrailleEvents, FaBrailleSlots> {
}
export {};
