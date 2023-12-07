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
export type IoMdQuoteProps = typeof __propDef.props;
export type IoMdQuoteEvents = typeof __propDef.events;
export type IoMdQuoteSlots = typeof __propDef.slots;
export default class IoMdQuote extends SvelteComponentTyped<IoMdQuoteProps, IoMdQuoteEvents, IoMdQuoteSlots> {
}
export {};
