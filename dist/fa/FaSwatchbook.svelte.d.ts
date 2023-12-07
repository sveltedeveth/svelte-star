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
export type FaSwatchbookProps = typeof __propDef.props;
export type FaSwatchbookEvents = typeof __propDef.events;
export type FaSwatchbookSlots = typeof __propDef.slots;
export default class FaSwatchbook extends SvelteComponentTyped<FaSwatchbookProps, FaSwatchbookEvents, FaSwatchbookSlots> {
}
export {};
